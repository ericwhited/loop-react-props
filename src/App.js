import React from 'react';
import NameCard from './NameCard'
import './App.css';

const NameTag = props => (
  // <p>Hello, my name is Eric</p>
  <p>Hello, my name is {props.name}</p>
) 

const buttonHandler = (props) => {
  alert(`Hello, my name is ${props.name} and my title is ${props.title}`)
}

function App() {
  return (
    <div style={{display: "flex", justifyContent: "center"}} className="App">
      {/*<NameTag name="Zenders" />
      <NameTag name="D2" />
  <NameTag name="Zenders" />*/}
    <NameCard name="Brian Antczak" title="Head Princess" buttonHandler={(props) => buttonHandler(props)} />
    <NameCard name="Eric Whited" title="Developer" />
    </div>
  );
}

export default App;
