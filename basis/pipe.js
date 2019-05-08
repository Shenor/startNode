//соединения потока чтения и записи
const fs = require('fs');
const zlib = require('zlib');


const input = fs.createReadStream('lorem.txt', 'utf-8');
const output = fs.createWriteStream('lorem.md.gz');
const gzip = zlib.createGzip();

//Чтение потока и запись потока в архив
input.pipe(gzip).pipe(output);

