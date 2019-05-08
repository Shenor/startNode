const fs = require('fs');

const stream = fs.createReadStream('lorem.txt', 'utf-8');

let data = "";

stream.on('data', part => data += part);
stream.on('end', ()=>console.log('End', data.length));
stream.on('error', ()=>console.log('Error', error.message));
