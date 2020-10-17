const storeButton =  document.getElementById('store-btn');
const retrieveButton =  document.getElementById('retrieve-btn');
const userId = 'u123';

const user = {
    name: 'Bartosz',
    age: 21,
    hobbies: ['sport', 'cooking']
}

storeButton.addEventListener('click', () => {
localStorage.setItem('uid', userId);
localStorage.setItem('user', JSON.stringify(user));
})
retrieveButton.addEventListener('click', () => {
  const extractedId = localStorage.getItem('uid');
  const extractedUser = JSON.parse(localStorage.getItem('user'));
    console.log(extractedUser)
  if (extractedId) {
      console.log(`Got the id ${extractedId}`)
  } else {
      console.log('Could not fin id')
  }
})
