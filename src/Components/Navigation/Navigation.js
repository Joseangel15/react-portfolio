import React, {Component} from 'react';
import './Navigation.css';
import LinkedInLogo from '../../Assets/LinkedIn_logo_initials.png';
import GitHubLogo from '../../Assets/github-logo-1.png';


class Navigation extends Component{

    render(){

        const margin ={
            margin: '0px 30px 0px 30px'
        }

        return(
            <div className='mainBar'>
                <section className='menu'>
                        <h2 style={margin}>Home</h2>
                        <h2 style={margin}>About Me</h2>
                        <h2 style={margin}>Skills</h2>
                        <h2 style={margin}>Projects</h2>
                        <h2 style={margin}>Contact Me</h2>
                </section>
            </div>
        )
    }
}

export default Navigation;
