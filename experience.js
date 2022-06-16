'use strict';

const newData = {
    shareName: 'AAA',
    typeOfTransaction: 'sell',
    price: 56.78,
    tickNumber: 4143542356,
    trades: 3
}

const {shareName, typeOfTransaction, price, tickNumber, trades} = newData;
    

const historyDB = [
    {
    shareName: 'SBER',
    typeOfTransaction: 'buy',
    price: 120.77,
    tickNumber: 124545633,
    trades: 4
    },
    {
    shareName: 'GAZP',
    typeOfTransaction: 'sell',
    price: 122.78,
    tickNumber: 124545635,
    trades: 2
    },
    {
    shareName: 'PHOR',
    typeOfTransaction: 'buy',
    price: 123.18,
    tickNumber: 124545638,
    trades: 7
    },
];


const newDB = [];

newDB.push({
    shareName: (typeof(shareName)=='string' && shareName !== undefined && shareName !== null && shareName !=='') ? shareName : 'Введите корректные данные (только буквы, например AA, F)',
    typeOfTransaction: (typeof(typeOfTransaction)=='string' && typeOfTransaction !== undefined && typeOfTransaction !== null && typeOfTransaction !=='') ? typeOfTransaction : 'Введите корректные данные (sell или buy)',
    price: (typeof(price)=='number' && price !== undefined && price !== null && price !=='') ? price : 'Введите корректные данные (только числа)',
    tickNumber: (typeof(tickNumber)=='number' &&  tickNumber !== undefined &&  tickNumber !== null &&  tickNumber !=='') ?  tickNumber : 'Введите корректные данные (только числа)',
    trades: (typeof(trades)=='number' &&  trades !== undefined &&  trades !== null &&  trades !=='' && trades >= 1) ?  trades : 'Введите корректные данные (только числа)',
})

const totalDB = [...historyDB, ...newDB];

console.log(totalDB);





