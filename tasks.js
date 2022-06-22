"use strict";


// Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает 
// другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так 
// до бесконечности. Начальное число, с которого начинать отсчет, и шаг, задается при 
// создании генератора. Шаг можно не указывать, тогда он будет равен одному. 
// Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.

/* function sequence(start = 0, step = 1) {
    function* gen(start, step) {
        while(true) {
            yield start;
            start += step;
        } 
    }
    let generator = gen(start, step);

    return function() {
        return generator.next().value;
    }
}

let generator = sequence(10, 3);

console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator()); */

//Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз
// и возвращает массив с результатами вызовов. Она нам пригодится для отладки

/* let gen = function() {
    console.log('Hello');
}

function take(gen, x) {
    let arr = [];
    if (x >= 1) {
        for (let i = 0; i < x; i++) {
            arr.push(gen());
        }
    }
    return arr;
}

console.log(take(gen, 5)); */

// Напиши функцию map(fn, array), которая принимает на вход функцию и массив, 
// и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. 


