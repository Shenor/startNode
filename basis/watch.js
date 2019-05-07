//Наблюдение за файлами
const fs = require('fs');

//watch возвращает объект

const watcher = fs.watch(__dirname, (event, filename) => {
    console.log(event);
    console.log(filename)
});

watcher.on('error', error => {
    console.log(error);
})