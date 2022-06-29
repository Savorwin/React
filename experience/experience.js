"use strict";

const data = [
    {tick: 1, price: 120, position: 'buy', lots: 18},
    {tick: 2, price: 121, position: 'sell', lots: 18},
    {tick: 3, price: 120, position: 'sell', lots: 18},
    {tick: 4, price: 123, position: 'sell', lots: 22},
    {tick: 5, price: 124, position: 'sell', lots: 6},
    {tick: 6, price: 125, position: 'buy', lots: 8},
    {tick: 7, price: 126, position: 'buy', lots: 5},
    {tick: 8, price: 127, position: 'buy', lots: 9},
    {tick: 9, price: 128, position: 'sell', lots: 11},
];



function createButton(className, text, data) {
  const button = document.createElement('button');
  document.body.append(button);
  button.setAttribute('class', className);
  button.append(document.createTextNode(text));
  
  let buttons = document.querySelectorAll('button');
  
  for(let i = 0; i <= buttons.length; i++) {
    button.setAttribute('id', i);
  }

  if(button.classList.contains('button_up')) {
    button.classList.add('upArrow');
  }
  if(button.classList.contains('button_down')) {
    button.classList.add('downArrow');
  }

  button.addEventListener('click', () => {
    if(button.classList.contains('button_up')) {
      let elem = {
        tick: data.length + 1,
        price: data[data.length - 1].price + 1,
      };
      data.push(elem);
      let table = document.getElementById('table');
      table.remove();
      createTable(data);
    }
    if(button.classList.contains('button_down')) {
      let elem = {
        tick: data.length + 1,
        price: data[data.length - 1].price - 1,
      };
      data.push(elem);
      let table = document.getElementById('table');
      table.remove();
      createTable(data);
    }
    console.log(data);
  });
}

createButton('button_up', 'UP ', data);
createButton('button_down', 'DOWN ', data);

function createTable(data) {
  
  let minPrice = 99999,
      maxPrice = -1,
      minTick = 99999,
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

  document.body.append(table);
  table.setAttribute('id', 'table');
  table.setAttribute('class', 'table');
  table.setAttribute('border', '1px solid black');

    for(let i = maxPrice; i >= minPrice; i--) {
      const tr = document.createElement('tr');
      table.append(tr);

      for(let j = minTick; j <= maxTick + 1; j++) {
        const td = document.createElement('td');
        tr.append(td);
        td.setAttribute('width', '60px');
        td.setAttribute('height', '60px');

        if(j < maxTick + 1) {
        td.setAttribute('id', `p${i}t${j}`);
        } else {
        const text = document.createTextNode(i);
        td.append(text);
        if (i === data[data.length - 1].price){
          td.style.backgroundColor =' white';
        }
       }
     }
    }

  const tr = document.createElement('tr');
  table.append(tr);

    for(let i = minTick; i <= maxTick; i++) {
    const td = document.createElement('td');
      tr.append(td);
      td.setAttribute('width', '60px');
      td.setAttribute('height', '60px');

    if(i < maxTick + 1) {
    const text = document.createTextNode(i);
    td.append(text);
    }
  }

  for(let i = 0; i < data.length; i++) {
    const elem = document.getElementById(`p${data[i].price}t${data[i].tick}`);
    const div = document.createElement('div');

    if(data[i].position === 'buy') {
      elem.append(div);
      div.classList.add('green');
      div.append(document.createTextNode('buy'));
    }

    if(data[i].position === 'sell') {
      elem.append(div);
      div.classList.add('red');
      div.append(document.createTextNode('sell'));
    }
  }
}

createTable(data);






    




