const stockButton =  document.getElementById('store-btn');
const rtvButton =  document.getElementById('retrieve-btn');


stockButton.addEventListener('click', () => {
    const userId = 'u123'
    const user = {
        name: 'Bartosz',
        age: 21
    }
    // add a new value not replace the existing one
    document.cookie = `uid=${userId}; max-age=3`;
    document.cookie = `user=${JSON.stringify(user)}`;
})
rtvButton.addEventListener('click', () => {
    const coockieData = document.cookie.split(';');
    const data = coockieData.map(el => el.trim());
    console.log(data[1].split('=')[1])
})