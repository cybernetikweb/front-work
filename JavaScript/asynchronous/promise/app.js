const button = document.querySelector('button')

const getPosition = opts =>
    new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(succes => {
            resolve(succes)
        }, error => {
            reject(error)
        }, opts)
    })


const setTimer = (duration) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, duration)
    })

const TrackUserHandler = () => {
    let positionData;
    getPosition()
        .then(posData => {
        positionData = posData;
        return setTimer(2000);
    })
        .catch(err => {
            console.log(err);
            return 'on we go …'
        })
        .then(data => {
        console.log(data, positionData)
    });
    setTimer(1000)
        .then(() => console.log('timer Done!'));
    console.log("Getting position …")
}

button.addEventListener('click', TrackUserHandler);