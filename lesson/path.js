const path = require('path');

console.log('Склеивание путей, автоматически используются соотвествующие текущей ОС сепараторы', path.join('first', 'second'));

console.log(__dirname);
console.log(__filename);

const fullPath = path.resolve('first', 'second');

console.log('Склеивание путей с абсолютным', fullPath);
console.log('Парсинг строки', path.parse(fullPath));


// URL -------------------- //
const siteUrl = 'http://localhost:8080/users?id=1';

const url = new URL(siteUrl);

console.log(url);