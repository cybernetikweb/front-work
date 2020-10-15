#Promise State

**PENDING** 

- Promise is doing work, neither then() nor catch() executes at this moment.

**RESOLVED**
 - Promise is resolved --> then() executes.

**REJECTED**
 - Promise was rejected --> catch() executes.
    
 Si il ne reste plus de blocs then:
 
 **SETTLED**
  - Allow to use finnaly()
    - Execute no mather if I resolve or reject before

##Exemple

```javascript
somePromiseCreatingCode()
    .then(firstResult => {
        return 'done with first promise';
    })
    .catch(err => {
        // would handle any errors thrown before
        // implicitly returns a new promise - just like then()
    })
    .finally(() => {
        // the promise is settled now - finally() will NOT return a new promise!
        // you can do final cleanup work here
    });
```