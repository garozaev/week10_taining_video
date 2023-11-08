//Видео1
console.log('Видео1');

function showMessage() {
    console.log('Привет Куся');
}
showMessage();

function y(x) {
    return x**2;
}

console.log (y(5));

function showMessageFromUser(name = 'Аноним', text = "Не хочет преветствовать") {
    //return name + ': ' + text;
    return (`${name},: ${text}`);
}

let MessageFromUser = showMessageFromUser();

console.log(MessageFromUser);

//Видео 2
console.log('Видео2');
//FunctionDecloration
//let result1 = sum1(4,6); будет работать и до функции
function sum1(a,b) {
    return a + b;
}
let result1 = sum1(4,6);
console.log(result1);

//FunctionExpression
//let result2 = sum2(5,6); до функции работать не будет
let sum2 = function(a,b) {
    return a + b;
};//обязательно ставится ; так как это выражение после объявления переменной

let result2 = sum2(5,6);
console.log(result2);

function funcInFunc(test) {
    test();
}
console.log('!функция в функции!');
funcInFunc(function () {
    console.log('Привет');
});// функция в функции

console.log('!функции быстрого вызова!');
console.log((function(a,b) {
    return a + b;
})(25,25));// функции быстрого вызова

//Стрелочные функции
console.log('!Стрелочные функции!');

let sum3 = (a,b) => a + b;
let result3 = sum3(25,26);
console.log(result3);

let y2 = x => 10 - x;
console.log(y2(2));

let showMessageMomente = () => {
    let name = prompt('Назови Имя?')
    console.log('Как дела?')};
showMessageMomente();