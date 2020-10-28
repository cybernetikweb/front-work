const fs = require('fs');

fs.readFile('user-data.txt', (err, data) => err ? console.log(err) : console.log(data.toString()));
fs.writeFile('user-data.txt', 'username=Bartosz', err => err ? console.log(err) : console.log('Wrote to file!'));