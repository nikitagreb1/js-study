"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

/* const obj = {
    a: 50
};

obj.a = 10;

console.log(obj); */

var name = 'Nikita';

name = 'Jose';

console.log(name);

const carBodyWidth = 5000,
    carBodyLength = 4000;

console.log('Ширина автомобиля: ' + carBodyWidth + ', ' + 'а длинна: ' + carBodyLength);


const COLOR_RED = "#F00";

const _apiKey = '...';

// camelCase
// snake_case
// UPER_SNAKE_CASE
// Kebab-Case
// PascalCase

let testNumber = 5;  //number
let testString = 'Name';  //string
console.log(typeof testNumber / 0); //infinity
console.log(typeof testString / testNumber); //NaN - операция, которая не имеет смысла

let bool = true;  // true || false boolean
console.log(typeof something); //null - переменной не существует. Ошибка

let und;
console.log(und); // undefined - не задано значение перменной

const obj = {
    name: 'Jose',
    1: 24,
    isMarried: false,
    abc: {
        df: [{}, {}],
        def: {

        }
    }
}; // object - коллекция данных. используются любые типы данных

const country = "country";
obj[country] = "Russia"; //вариант добавления  свойства в объект, при заданной переменной. ПОдходит для заполнения динамических данных, можно еще записать массив и объект, вместо обычного значения

obj.country = "Russia"; // добавление свойства в объект 
obj['country'] = "Russia"; // альтернативный вариант добавления примера выше
//console.log(obj.name);
console.log(obj.country);
console.log(obj["name"]);
//console.log(obj.age);
console.log(obj[1]); // если ключ задан в виде числа, то лучше вызывать его с помощью квадратных скобок
console.log(obj.isMarried);


let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []]; // object massive - комплексный объект, не является отедльным типом данных, а всего лишь является разновидностью объекта. ИСпользуется для хранения данныъ, которые идут строго по порядку Также как и объект может содержать различные типы данных.
console.log(arr[0]); // результат: plum.png

//alert('Hello!'); // - выводит какой-то текст. Например при закрытии страницы

//const result = confirm("Вы здесь?"); // - выводит какой-то вопрос. ответ в виде булевого значения . ответ хранится в этой переменной
//console.log(result);

//const answer = prompt("Вам есть 18", ""); // - выводит какой-то текст, при этом есть поле для ответа. ответ в виде строки. ответ хранится в этой переменной. вторые скобки это плейсхолдер, но для internet explorer рекомендуется оставлять пустым.
//const answer = +prompt("Вам есть 18", ""); // - уже будет числовой тип данных

const answers = [];
answers[0] = prompt('Ваше имя?', '');
answers[1] = prompt('Ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers);

let incr = 10, decr = 10; // -
incr++; // - есть префиксная и постфиксная. постфиксные берут сначала стандартное число, а потом прибалвют. префиксная когда сразу идет складывание
decr--;  // -
console.log(incr); // -
console.log(decr); // -

console.log(5 % 2); // - остаток от деления. результат в данном случае 1

const isChecked = true, isClose = true;

console.log(isChecked && isClose); // true

console.log(isChecked || isClose); // true

console.log(isChecked && !isClose); // false

console.log(2 + 2 * 2 != 8); // - не равен 8 true

console.log(2 + 2 * 2 != `6`); // - равно 6 false
console.log(2 + 2 * 2 !== `6`); // - не равно 6 true, два разных типа данныъ. строгое не равно