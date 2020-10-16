const listElements = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button')
const postList = document.querySelector('ul');

const sendHttpRequests = async (method, url, data) =>  {
    try {
        let response = await fetch(url, {
            method,
            body: data,
        });
        if (response.status >= 200 && response.status < 300) {
    // .json'll parse the body of the response
            return response.json()
        } else {
            throw new Error('Something went wrong : server')
        }
    } catch (error) {
        console.log(error);
        throw new Error('Something went wrong!')
    }
}

const fetchPosts = async () => {
  try {
      const listOfPosts = await sendHttpRequests('GET', 'https://jsonplaceholder.typicode.com/posts');
        for (let i = 0; i < listOfPosts.length; i++) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = listOfPosts[i].title.toUpperCase();
            postEl.querySelector('p').textContent = listOfPosts[i].body;
            postEl.querySelector('li').id = listOfPosts[i].id;
            listElements.appendChild(postEl);
    }
    } catch (error) {
     alert(error.message);
     }
};

const createPosts = async (title, content) => {
    const userId = Math.random();
    const post = {
        userId : userId
    };
    // FormData envoie les données d'un formulaire
    const fd = new FormData(form);
    fd.append('title', title)
    fd.append('body', content)
    fd.append('userId', userId)

    sendHttpRequests("POST",'https://jsonplaceholder.typicode.com/posts', fd)
}

fetchButton.addEventListener('click', fetchPosts);

form.addEventListener('submit', e => {
    e.preventDefault();
    const enteredTitle = e.currentTarget.querySelector('#title').value;
    const enteredContent = e.currentTarget.querySelector('#content').value;

    createPosts(enteredTitle, enteredContent);
});

postList.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON'){
        const postId = e.target.closest('li').id;
        sendHttpRequests('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
})





