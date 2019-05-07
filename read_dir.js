//Чтение директорий
const fs = require('fs');

//асинхронный вывод
fs.readdir(__dirname, (error, content) => {
    if(error) throw error;

    console.log(content);
});

//При синхроном считывании файлы вывелись поочереди, при асинхроном вызове функции вывода не будет 
// const content = fs.readdirSync(__dirname);
// console.log(content);