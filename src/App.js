import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import HelloWorld from './components/HelloWorld'

function App() {
  return (
    
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      <PersonCard firstName="Jane" lastName="Fillmore" age={50} hairColor="Brown" />
      <PersonCard firstName="Jane" lastName="Smith" age={62} hairColor="Brown" />
      <HelloWorld funTimes={"Hello World"}/>
      <HelloWorld funTimes={"I am now reusing this component"}/>

    </div>
  );
}

export default App;
