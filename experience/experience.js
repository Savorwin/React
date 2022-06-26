"use strict";

const data = [
    {tick: 1, price: 120, position: 'buy', lots: 18},
    {tick: 1, price: 120, position: 'buy', lots: 18},
    {tick: 1, price: 120, position: 'sell', lots: 18},
    {tick: 2, price: 121, position: 'sell', lots: 18},
    {tick: 3, price: 120, position: 'sell', lots: 18},
    {tick: 4, price: 123, position: 'sell', lots: 22},
    {tick: 5, price: 124, position: 'sell', lots: 6},
    {tick: 6, price: 125, position: 'buy', lots: 8},
    {tick: 7, price: 126, position: 'buy', lots: 5},
    {tick: 8, price: 127, position: 'buy', lots: 9},
    {tick: 9, price: 128, position: 'sell', lots: 11},
];

let minPrice = 9999,
    maxPrice = -1,
    minTick = 9999,
    maxTick = -1;

for(let i = 0; i < data.length; i++) {
  
  if(data[i].price > maxPrice) {
    maxPrice = data[i].price;
  }
  if(data[i].price < minPrice) {
    minPrice = data[i].price;
  }

  if(data[i].tick > maxTick) {
    maxTick = data[i].tick;
  }
  if(data[i].tick < minTick) {
    minTick = data[i].tick;
  }
}

const table = document.createElement('table');
      
table.classList.add('table');
document.body.append(table);
table.setAttribute('border', '1px solid black');
 
for (let i = maxPrice; i >= minPrice; i--) {
  const tr = document.createElement('tr');
  table.append(tr);

  for (let j = minTick; j <= maxTick + 1; j++) {
    const td = document.createElement('td');
  //  let text = document.createTextNode(``);
    tr.append(td);
   // td.append(text);
   td.setAttribute('width', '60px');
   td.setAttribute('height', '60px');
   if (j < maxTick + 1){
    td.setAttribute('id', `p${i}t${j}`);
   } else {
    let text = document.createTextNode(i);
    td.append(text);
   }

  }

}

const tr = document.createElement('tr');

table.append(tr);
for (let j = minTick; j <= maxTick + 1; j++) {
  const td = document.createElement('td');
  tr.append(td);
  if (j < maxTick + 1){
  let text = document.createTextNode(j);
 
    td.append(text);
  }
}



for (let k = 0; k < data.length; k++) {

  let elem = document.getElementById(`p${data[k].price}t${data[k].tick}`);
  const div = document.createElement('div');
  if (data[k].position === 'buy') {

    div.classList.add('green');
    div.append(document.createTextNode('buy'));
    elem.append(div)
  }
  if (data[k].position === 'sell') {
    div.classList.add('red');
    div.append(document.createTextNode('sell'));
    elem.append(div)

  }
}





