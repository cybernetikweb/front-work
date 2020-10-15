const button = document.querySelector('button')
const output = document.querySelector('p')

const TrackUserHandler = () => {
    navigator.geolocation.getCurrentPosition(posData => {
        setTimeout(() => {
            console.log(posData);
        }, 2000)
    }, error => {
        console.log(error)
    });
    setTimeout(() => {
        console.log('Time out!')
    })
    console.log("Getting position …")
}

button.addEventListener('click', TrackUserHandler);