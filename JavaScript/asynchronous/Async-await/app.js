const button = document.querySelector('button')

const getPosition = opts =>
    new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(succes => {
            resolve(succes)
        }, error => {
            reject(error)
        }, opts)
    })


const setTimer = async (duration) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, duration)
    })

const TrackUserHandler = async () => {
        let posData;
        let timerData;
    try {
        posData = await getPosition();
        timerData = await setTimer(2000);
    } catch (error) {
        console.log(error)
    }
        console.log(timerData, posData )
}

button.addEventListener('click', TrackUserHandler);

Promise.race([getPosition(), setTimer(1000)]).then(promiseData => {
    console.log(promiseData)
})
Promise.all([getPosition(), setTimer(1000)]).then(promiseData => {
    console.log(promiseData)
})
Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData => {
    console.log(promiseData)
})
