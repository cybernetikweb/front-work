const listElements = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button')
const postList = document.querySelector('ul');

const fetchPosts = async () => {
  try {
      const response = await axios.get( 'https://jsonplaceholder.typicode.com/posts');
        for (let i = 0; i < response.data.length; i++) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = response.data[i].title.toUpperCase();
            postEl.querySelector('p').textContent = response.data[i].body;
            postEl.querySelector('li').id = response.data[i].id;
            listElements.appendChild(postEl);
    }
    } catch (error) {
     alert(error.message);
      console.log(error.response)
     }
};

const createPosts = async (title, content) => {
    const userId = Math.random();
    const post = {
        title,
        body: content,
        userId : userId
    };
    // FormData envoie les données d'un formulaire
    const fd = new FormData(form);
    fd.append('userId', userId)

    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post)
    console.log(response)
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
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
})





