import React from 'react';
import "./Hello.css"


function Hello({firstname, lastname}) {
  
  return <div>
    Hello from Hello.js
<div> 
    <p className="myname">I am <strong >{firstname} {lastname}</strong></p>
    <h3>Importance of Time Management</h3>
    <ul>
        <li>Time is an asset that you can never get back </li>
        <li>Other blessings like wealth, even if spent unwisely, can be recovered through hard work</li>
        <li>It is important to spend time wisely, much more wisely than you spend your money</li>
    </ul>
</div>
   
    
    </div>
}

export default Hello;
