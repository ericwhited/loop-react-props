import React from 'react';
import NameCard from './NameCard'
import './App.css';
import peach from '../src/peach.png'
import qveenHerby from '../src/qveenHerby.jpg'

const buttonHandler = (props) => {
  alert(`Hello, my name is ${props.name} and my title is ${props.title}`)
}

function App() {
  return (
    <div style={{display: "flex", justifyContent: "center"}} className="App">
    <NameCard 
      name="Brian Antczak" 
      title="Head Princess"
      avatar={peach} 
      buttonHandler={(props) => buttonHandler(props)} />
    <NameCard 
      name="Eric Whited" 
      title="Developer" 
      avatar={qveenHerby}
      buttonHandler={(props) => buttonHandler(props)} />
    </div>
  );
}

export default App;
