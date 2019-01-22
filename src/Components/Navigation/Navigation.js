import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';



class Navigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showNav: false
        }
    }

    toggleNav() {
        this.setState({
            showNav: !this.state.showNav
        })
    }

    render() {

        const navMenuStyle = {
            // width: '0px',
            margin: '15px',
            color: 'white',
            fontFamily: 'Raleway, sans-serif',
            fontSize: '20px',
        }

        const linkColor = {
            textDecoration: 'none',
            color: 'white'
        }

        const margin = {
            margin: '0px 30px 0px 30px'
        }

        return (

            <div className='whoneNav'>
                <header id='topAnchor'>
                    <nav>
                        <div className='good-burger' onClick={() => this.toggleNav()}>
                            <div className='ingredients'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className='nav-menu'>
                            <Link to='/Home'><h2 style={navMenuStyle}>Home</h2></Link>
                            <HashLink smooth to='/Home#aboutMeDown'><h2 style={navMenuStyle}>About Me</h2></HashLink>
                            <HashLink smooth to='/Home#skillDown'><h2 style={navMenuStyle}>Skills</h2></HashLink>
                            <HashLink smooth to='/Home#projectDown'><h2 style={navMenuStyle}>Projects</h2></HashLink>
                            <HashLink smooth to='/Home#contactSection'><h2 style={navMenuStyle}>Contact Me</h2></HashLink>
                        </div>
                    </nav>
                </header>
                <div className={this.state.showNav ? 'show-nav mobile-nav' : ' ' + 'mobile-nav'}>
                    <div className="mobile-nav-content">
                        <Link to='/Home'><h2 style={navMenuStyle}>Home</h2></Link>
                        <HashLink smooth to='/Home#aboutMeDown'><h2 style={navMenuStyle}>About Me</h2></HashLink>
                        <HashLink smooth to='/Home#skillDown'><h2 style={navMenuStyle}>Skills</h2></HashLink>
                        <HashLink smooth to='/Home#projectDown'><h2 style={navMenuStyle}>Projects</h2></HashLink>
                        <HashLink smooth to='/Home#contacSection'><h2 style={navMenuStyle}>Contact Me</h2></HashLink>
                    </div>
                </div>

                <div className="perspective">
                </div>
            </div>

            // <div className='mainBar' id='homeUp'>
            //     <div className='good-burger' onClick={() => this.toggleNav()}>
            //         <div className='ingredients'>
            //             <div></div>
            //             <div></div>
            //             <div></div>
            //         </div>
            //     </div>
            //     <section className='menu'>
            //         <Link to='/Home'><h2 style={margin}>Home</h2></Link>
            //         <HashLink smooth to='/Home#aboutMeDown'><h2 style={margin}>About Me</h2></HashLink>
            //         <HashLink smooth to='/Home#skillDown'><h2 style={margin}>Skills</h2></HashLink>
            //         <HashLink smooth to='/Home#projectDown'><h2 style={margin}>Projects</h2></HashLink>
            //         <HashLink smooth to='/Home#contactDown'><h2 style={margin}>Contact Me</h2></HashLink>
            //     </section>

            //     <div className="perspective">
            //     </div>
            // </div>
        )
    }
}

export default Navigation;
