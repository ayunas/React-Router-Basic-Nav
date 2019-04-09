import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Link to='./'>Home</Link>
      <Link to='./about'>About</Link>
      <Link to='./contact'>Contact</Link>
    </div>
  )
  
  
    // <div>
    //   <div className="App">
    //     <h1>React Router Mini</h1>
    //     <div>
    //       <a href="">Home</a>
    //     </div>
    //     <div>
    //       <a href="">About</a>
    //     </div>
    //     <div>
    //       <a href="">Contact</a>
    //     </div>
    //   </div>
    // </div>
};

export default Navigation;
