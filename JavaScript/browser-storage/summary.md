###Difference between session & local storage

    Session === Reste tant que la page est ouverte sur la navigateur

    Local === Reste tant que l'utilisateur ou le navigateur ne la pas vidé

    Coockies === Ne sont disponible que si il y a un server

    IndexDb = is like a database in client-side


###Local storage
    - exemple :
    
        -  localStorage.setItem('monChat', 'Tom');
        -  let cat = localStorage.getItem('myCat');
        -  localStorage.removeItem('myCat');
        -  localStorage.clear();

Tutorial indexedDB:
- https://developer.mozilla.org/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB