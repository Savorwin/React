import {Component} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello world</h2>
}

/* const Field = () => {
  const holder = 'Enter here';
  const styledField = {
    width: '300px',
    height: '30px',
  }
  return <input placeholder={holder} type="text" style={styledField}/>
} */

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styledField = {
      width: '300px',
      height: '30px',
  };
    return <input placeholder={holder} type="text" style={styledField}/>
  }
}

function Btn() {
  const text = 'Log in';
  const logged = false;
  /* const res = () => {
    return 'Log in';
  }
  const p = <p>Lig in</p> */
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export default App;
