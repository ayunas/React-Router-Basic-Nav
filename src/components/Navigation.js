import './components.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar} from 'reactstrap';


const Navigation = () => {
  return (
    <Navbar color='light'>
      <Link to='./'> <Button color='primary'>Home</Button> </Link>
      <Link to='./about'><Button color='info'>About</Button></Link>
      <Link to='./contact'><Button color='success'>Contact</Button></Link>
    </Navbar>
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
