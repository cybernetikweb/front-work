const listElements = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button')
const postList = document.querySelector('ul');

const sendHttpRequests = (methode, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(methode, url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.responseType = 'json'; // automatic parse of the json
        xhr.onload = () => {
            xhr.status >=  200 && xhr.status < 200 ? resolve(xhr.response) : reject(new Error('Something went wrong!'));
        };

        // If wifi is bad
        xhr.onerror = () => {
            reject(new Error('Fail to send request!'))
        }

        xhr.send(JSON.stringify(data));
    });
    return promise
}

 const fetchPosts = async () => {
    try {
        const listOfPost = await sendHttpRequests('GET', 'https://jsonplaceholder.typicode.com/pos');
        for (let i = 0; i < listOfPost.length; i++) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = listOfPost[i].title.toUpperCase();
            postEl.querySelector('p').textContent = listOfPost[i].body;
            postEl.querySelector('li').id = listOfPost[i].id;
            listElements.appendChild(postEl);
    }
    } catch (error) {
        alert(error.message);
    }
};

const createPosts = async (title, content) => {
    const userId = Math.random();
    const post = {
        title,
        body : content,
        userId : userId
    }
    sendHttpRequests("POST",'https://jsonplaceholder.typicode.com/posts', post)
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





