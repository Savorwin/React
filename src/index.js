import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* const elem = <h2>Hello world!</h2>; */ //JSX

/* const elem = React.createElement('h2', {className: 'xxx'}, 'Hello my world!'); */ // Native js

const text = "Hello world";

const elem = (
  <div>
    <h2 className='text'>Текст: {text}</h2>
    <input type="text" />
    <button tabIndex={0}>Click</button>
    <label htmlFor=""></label>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
);
