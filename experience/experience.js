"use strict";

const data = [
    {tics: '1', price: 120, position: 'buy', trades: 18},
    {tics: '2', price: 121, position: 'sell', trades: 22},
    {tics: '3', price: 122, position: 'sell', trades: 6},
    {tics: '4', price: 125, position: 'buy', trades: 9},
    {tics: '5', price: 119, position: 'sell', trades: 11},
];

const tics = data.map(elem => elem.tics),
      price = data.map(elem => elem.price),
      position = data.map(elem => elem.position),
      trades = data.map(elem => elem.trades);


const table = document.createElement('table');
      
      
document.body.append(table);
table.setAttribute('border', '1');
table.setAttribute('width', '600px');
table.setAttribute('height', '600px');


function createTable() {
  for (let i = 0; i <= data.length; i++) {
    let row = table.insertRow(i);
  
    for (let j = 0; j < data.length; j++) {
      let cell = row.insertCell(j);
      let text = document.createTextNode('');
      cell.append(text);

      
      if (position[j] === 'sell') {
        cell.setAttribute('style', 'background-color: red;');
        cell.innerText='SELL';
      } else {
        cell.setAttribute('style', 'background-color: green;');
        cell.innerText='BUY';
      }
    }
  }
}

createTable();







/* const tics = data.map(elem => elem.tics),
      price = data.map(elem => elem.price),
      position = data.map(elem => elem.position);

      const body = document.getElementById('body'),
            table = document.createElement('table'),
            tHead = document.createElement('thead'),
            tBody = document.createElement('tbody'),
            trHead = document.createElement('tr'),
            tdHead = document.createElement('td'),
            textHead = document.createTextNode('Tics / Price');
      
      table.append(tHead);
      tHead.append(trHead);
      trHead.append(tdHead);
      tdHead.append(textHead);
      table.append(tBody);
      document.body.append(table);
      table.classList.add('table');
      table.setAttribute('border', '1');
      table.setAttribute('width', '600px');
      table.setAttribute('style', 'background-color: rgba(12, 222, 250);');

      
    for (let i = 0; i < data.length; i++) {
      const tr = document.createElement("tr");
       
      for (let j = 0; j < data.length; j++) {
        const td = document.createElement("td");
        

        if(position === 'sell') {
          td.setAttribute('style', 'background-color: red;');
         } else {
          td.setAttribute('style', 'background-color: green;');
         }
        
        const tdContent = document.createTextNode(`${tics[j]}`);
        td.append(tdContent);
        tr.append(td);
        td.setAttribute('width', '100px');
      }
      
       tBody.append(tr);
     }
      */
     
 

    








