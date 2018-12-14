import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import './Navigation.css';



class Navigation extends Component{

    render(){

        const margin ={
            margin: '0px 30px 0px 30px'
        }

        return(
            <div className='mainBar' id='homeUp'>
                <section className='menu'>
                        <Link to='/Home'><h2 style={margin}>Home</h2></Link>
                        <HashLink smooth to='/Home#aboutMeDown'><h2 style={margin}>About Me</h2></HashLink>
                        <HashLink smooth to='/Home#skillDown'><h2 style={margin}>Skills</h2></HashLink>
                        <HashLink smooth to='/Home#projectDown'><h2 style={margin}>Projects</h2></HashLink>
                        <HashLink smooth to='/Home#contactDown'><h2 style={margin}>Contact Me</h2></HashLink>
                </section>
            </div>
        )
    }
}

export default Navigation;
