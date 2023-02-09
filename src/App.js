import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

function App() {
  const [value,setvalue]= useState(0)
  return (
    <div className="App">
      <header className="App-header">
        Counter
      </header>
      <div className='button'>
      <button className='Button' onClick={(e)=>{
        if (value < 9)
        {return setvalue(value + 1)}
        else
        {return setvalue(0)}
      }}>+</button>
      <body className='page'>
        <p className='Numbers'>{value}</p>
      </body>
      <button className='Button' onClick={(e)=>{
        if (value > 0)
        {return setvalue(value - 1)}
        else
        {return setvalue(9)}
      }}>-</button>
      </div>
      <body className='Body'>
      <button className='Reset' onClick={(e)=>{
        return setvalue(0)
      }}>Reset</button>
      </body>
      
    </div>
  );
}

export default App;
