const storeBtn =  document.getElementById('store-btn');
const rtvBtn =  document.getElementById('retrieve-btn');

let db;

const dbRequest = indexedDB.open('StorageDummy', 1);

dbRequest.onsuccess = e => db = e.target.result;

dbRequest.onupgradeneeded = e => {
    db = e.target?.result;

    const objStore = db.createObjectStore('products', {keyPath: 'id'});

    objStore.transaction.oncomplete = e => {
        const productStore = db.transaction('products', 'readwrite').objectStore('products');
        productStore.add({id: 'p1', title: 'FirstProduct', price : 12.99, tag : ['Expensive', 'Luxury']})
    }
}

dbRequest.onerror = () => {
    console.log('Error!')
}

storeBtn.addEventListener('click', () => {
    if (!db) {
        return;
    }
    const productStore = db.transaction('products', 'readwrite').objectStore('products');
    productStore.add({id: 'p2', title: 'Second Product', price : 122.99, tag : ['Expensive', 'Luxury']})
})


rtvBtn.addEventListener('click', () => {
    const productStore = db.transaction('products', 'readwrite').objectStore('products');
    const request = productStore.get('p2');

    request.onsuccess = () => console.log(request.result);
})