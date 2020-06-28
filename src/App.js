import React from 'react';
import './App.css';
import Hello from './Hello.js'

function App({firstname, lastname}) {
  
  return <div>
    Hello from app.js. 
    <div>
      I am an embedded div in App.js 
      <Hello firstname={firstname} lastname={lastname}/> 
    </div>
    </div>
}

export default App;
