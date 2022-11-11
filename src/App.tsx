import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Pad from './components/Pad'
import messages from './assets/messages.json'
import React from 'react'


const pads : any = []

for(let i:number = 0; i<messages.length; i++)
{
  pads.push(<Pad message={messages[i]} src={i} key={i}/>)
}

function App() {
  return (
    <>
      <Header/>
        <div className='grid-container'>
            {pads}
        </div>
      <Footer/>
    </>
  );
}

export default App;