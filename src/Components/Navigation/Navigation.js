import React, {Component} from 'react';
import './Navigation.css';
import LinkedInLogo from '../../Assets/LinkedIn_logo_initials.png';
import GitHubLogo from '../../Assets/github-logo-1.png';


class Navigation extends Component{

    render(){

        const margin ={
            marginRight: '60px'
        }

        return(
            <div className='mainBar'>
                <section className='menu'>
                    <div className= 'menuOptions'>
                        <h2 style={margin}>Home</h2>
                        <h2 style={margin}>About Me</h2>
                        <h2 style={margin}>Skills</h2>
                        <h2 style={margin}>Projects</h2>
                        <h2 style={margin}>Contact Me</h2>
                    </div>
                    <div className='logos'>
                        <img src={LinkedInLogo} alt="" id='LinkedInLogo'/>
                        <img src={GitHubLogo} alt="" id='gitHubLogo'/>
                    </div>
                </section>
            </div>
        )
    }
}

export default Navigation;
