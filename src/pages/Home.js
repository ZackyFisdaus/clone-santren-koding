import React, {Component} from 'react';
import NavBar from '../components/Navbar.js';
import Jumbotron from '../components/Jumbotron.js';

class Home extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <Jumbotron/>
           </div>
        );
    }
}

export default Home;