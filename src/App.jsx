import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
function handel(w){
  setValue(w.target.value)
}
  return (
    <div className='Container'>
      <div className='Calculator'>
        <form action=''>
          <div className='display'>
            <input value={value} readOnly />
          </div>
          <div className='ss'> 
          <div>
            <input type='button' value="AC" onClick={(W)=>setValue('')} />
            <input type='button' value="DE" onClick={(W)=>setValue(value.slice(0,-1))} />
            <input type='button' value="." onClick={(W)=>setValue(value+W.target.value)} />
            <input type='button' value="/" onClick={(W)=>setValue(value+W.target.value)} />
    
          </div>
          <div>
            <input onClick={(W)=>setValue(value+W.target.value)} type='button' value="7" />
            <input onClick={(W)=>setValue(value+W.target.value)} type='button' value="8" />
            <input onClick={(W)=>setValue(value+W.target.value)} type='button' value="9" />
            <input onClick={(W)=>setValue(value+W.target.value)} type='button' value="+" />
            
          </div>
          <div>
            <input onClick={(W)=>setValue(value+W.target.value)} type='button' value="4" />
            <input onClick={(W)=>setValue(value+W.target.value)} type='button' value="5" />
            <input onClick={(W)=>setValue(value+W.target.value)} type='button' value="6" />
            <input type='button' value="*" onClick={(W)=>setValue(value+W.target.value)} />
          </div>
          <div>
            <input onClick={(W)=>setValue(value+W.target.value)} type='button' value="1" />
            <input onClick={(W)=>setValue(value+W.target.value)} type='button' value="2" />
            <input onClick={(W)=>setValue(value+W.target.value)} type='button' value="3" />
            <input onClick={(W)=>setValue(value+W.target.value)} type='button' value="-" />
          </div>
          <div>
            <input type='button' value="00" onClick={(W)=>setValue(value+W.target.value)} />
            <input type='button' value="0" onClick={(W)=>setValue(value+W.target.value)} />
            <input type='button' value="3" onClick={(W)=>setValue(value+W.target.value)} />
            <input type='button' value="=" onClick={e=>setValue(eval(value))}  />
          </div>
          </div> 
        </form>
      </div>
    </div>
  );
}

export default App;