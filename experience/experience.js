"use strict";

const data = [
    {teak: 1, price: 120, position: 'buy', lots: 18},
    {teak: 1, price: 120, position: 'sell', lots: 18},
    {teak: 2, price: 121, position: 'sell', lots: 22},
    {teak: 3, price: 122, position: 'sell', lots: 6},
    {teak: 3, price: 124, position: 'buy', lots: 8},
    {teak: 3, price: 128, position: 'buy', lots: 5},
    {teak: 4, price: 125, position: 'buy', lots: 9},
    {teak: 5, price: 119, position: 'sell', lots: 11},
];

const teak = data.map(elem => elem.teak),
      price = data.map(elem => elem.price),
      position = data.map(elem => elem.position);

const table = document.createElement('table');
table.classList.add('table');
document.body.append(table);

table.setAttribute('border', '1px solid black');
 
for (let i = 0; i < teak.length; i++) {
  const tr = document.createElement('tr');
  table.append(tr);

  for (let j = 0; j < price.length; j++) {
    const td = document.createElement('td');
    let text = document.createTextNode(`${position[j]}`);
    tr.append(td);
    td.append(text);
    td.setAttribute('id', `${i}${j}`);
    td.setAttribute('width', '60px');
    td.setAttribute('height', '60px');

    
    if (position[j] === 'buy') {
      td.classList.add('green');
    } else {
      td.classList.add('red');
    }
  }
}
     








