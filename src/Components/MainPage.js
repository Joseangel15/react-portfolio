import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import swal from 'sweetalert2';
import Clipboard from 'react-clipboard.js';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import './MainPage.css';
import javaScriptLogo from '../Assets/Java logo.png';
import htmlLogo from '../Assets/HTML5 logo.png';
import cssLogo from '../Assets/CSS logo.png';
import reactLogo from '../Assets/React logo.png';
import nodeLogo from '../Assets/Node logo.png';
import gitLogo from '../Assets/Git-Icon-1788C.png';
import postmanLogo from '../Assets/postman-logo.png';
import postgresLogo from '../Assets/Postgresql logo.png';
import jestLogo from '../Assets/jest logo.png';
import sassLogo from '../Assets/Sass Logo.png';
import senshiPic from '../Assets/Senshi site Home.PNG';
import yaucoPic from '../Assets/visitYaucoLogo.png';
import stackyPic from '../Assets/Stacky Game.PNG';
import gitHubIcon from '../Assets/github white.png';
import linkedIn from '../Assets/LinkedIn_logo_initials.png';
import codePen from '../Assets/code-pen logo.png';

class MainPage extends Component {
    constructor(props){
        super(props)

    
    }

    handleClick = () => {
        swal({
            position: 'top-end',
            title: 'Copied to clipboard',
            showConfirmButton: false,
            timer: 1000,
        })

    }


    render() {

        const projectCardInfo2 = {
            marginTop: '20px',
            fontSize: '22px',
            fontFamily: 'Raleway, sans-serif',
        }

        return (
            <div className='mainBack'>
                <Navigation />
                <section className='introBack' >
                    <div style={{ position: 'relative', top: '200px' }}>
                        <h1 className='myName'>JOSE A. ORTIZ</h1>
                        <hr className= 'lineUnderName'/>
                        <h2 className='myTitle'>Full Stack Web Developer</h2>
                    </div>
                </section>
                <section className='aboutMeSection' id='aboutMeDown'>
                    <div className="arrow-down">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <h1 className= 'textAbout'>About</h1><h1 className= 'textMe'>Me</h1>
                        </div>
                    </div>
                    <div className='introducePara' >
                        <h3 className='aboutMePara'>
                            As a married man and father of a smart, energetic four year old girl (Elena), I love to dedicate a big part of my time to create experiences that will bring us closer together as a family.
                        </h3>

                        <h3 className='aboutMePara'>
                            Technology has been a big driving force in my career choices. My recent professional experience includes working as a client consultant for the Microsoft Store and I also worked in Human Resources data entry systems. As much as I enjoyed and learned from these opportunities, I could not find what I really wanted to do until I learned about coding and Web Development.
                        </h3>

                        <h3 className='aboutMePara'>
                            Learning how to code and create web applications has been one the most fun, exciting and challenging things that I have ever done, and I LOVE IT! The opportunity to solve problems and learn something new every day is very fulfilling. As a Web Developer I get to combine my love of technology and creativity in many different ways to create something unique. I can't wait to see what lessons tomorrow will bring.
                        </h3>
                    </div>
                </section>
                <section className='skillsSection' id='skillDown'>
                    <div className='slideTop'>
                        <h1 className= 'textSkills'>Skills</h1>
                    </div>
                    <div className='cardsTop'>
                        <div className='skillCard'>
                            <img src={javaScriptLogo} alt="" className='skillLogo' />
                            <h1 className='skillName'>JavaScript</h1>
                        </div>
                        <div className='skillCard'>
                            <img src={cssLogo} alt="" className='skillLogo' />
                            <h1 className='skillName'>CSS</h1>
                        </div>
                        <div className='skillCard'>
                            <img src={htmlLogo} alt="" className='skillLogo' />
                            <h1 className='skillName'>HTML</h1>
                        </div>
                        <div className='skillCard'>
                            <img src={reactLogo} alt="" className='skillLogo' id='reactLogo' />
                            <h1 className='skillName'>React.js</h1>
                        </div>
                        <div className='skillCard'>
                            <img src={nodeLogo} alt="" className='skillLogo' id='nodeLogo'/>
                            <h1 className='skillName'>Node.js</h1>
                        </div>
                        <div className='skillCard'>
                            <img src={postgresLogo} alt="" className='skillLogo' />
                            <h1 className='skillName'>PostgreSQL</h1>
                        </div>
                        <div className='skillCard'>
                            <img src={postmanLogo} alt="" className='skillLogo' id='postmanLogo'/>
                            <h1 className='skillName'>Postman</h1>
                        </div>
                        <div className='skillCard'>
                            <img src={gitLogo} alt="" className='skillLogo' id='gitLogo'/>
                            <h1 className='skillName'>Git</h1>
                        </div>
                        <div className='skillCard'>
                            <img src={jestLogo} alt="" className='skillLogo' id='jestLogo'/>
                            <h1 className='skillName'>Jest</h1>
                        </div>
                        <div className='skillCard'>
                            <img src={sassLogo} alt="" className='skillLogo' id='sassLogo'/>
                            <h1 className='skillName'>Sass</h1>
                        </div>
                    </div>
                    <div className='slideDown'></div>
                    <div className= 'slideDownBar' ></div>
                </section>
                <section className='projectSection' id='projectDown'>
                    <h1 className='textProjects'>Projects</h1>
                    <div className= 'threeCards' >
                        <div className='projectCard' >
                            <img src={senshiPic} alt="" className='projectImage' />
                            <Link to='./Senshi'><h1 className='projectCardInfo' style={{color: '#CE121B'}} >Senshi</h1></Link>
                            <a href='https://senshiwarrior.com/'><h2 style={projectCardInfo2}>senshiwarrior.com</h2></a>
                            <a href='https://github.com/Joseangel15/senshi'><img src={gitHubIcon} alt="" className='gitHubWhite' /></a>
                        </div>
                        <div className='projectCard' >
                            <img src={yaucoPic} alt="" className='projectImage' />
                            <Link to='./Yauco'><h1 className='projectCardInfo' style={{color: '#ffe100'}}>VisitYauco</h1></Link>
                            <a href='https://www.visityauco.com/#/'><h2 style={projectCardInfo2}>visityauco.com</h2></a>
                            <a href='https://github.com/Joseangel15/VisitYauco'><img src={gitHubIcon} alt="" className='gitHubWhite' /></a>
                        </div>
                        <div className='projectCard' >
                            <img src={stackyPic} alt="" className='projectImage' />
                            <Link to='./Stacky'><h1 className='projectCardInfo' style={{color: '#FF019D'}}>Stacky</h1></Link>
                            <a href='https://stackygame.com/#/'><h2 style={projectCardInfo2}>stackygame.com</h2></a>
                            <a href='https://github.com/Group-Project-2048/tetris-2048'><img src={gitHubIcon} alt="" className='gitHubWhite' /></a>
                        </div>
                    </div>
                    <div className='lowerSectionBar'></div>
                </section>
                <section id='contactSection'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <h1 style={{ marginRight: '20px', fontSize: '55px', color: 'white', marginTop: '30px'}} >Get in</h1><h1 style={{ fontSize: '55px', fontFamily: 'Lobster, cursive', color: '#51E516', marginTop: '30px' }}>Touch</h1>
                    </div>
                    <div className='contactDown'>
                        <div className='allLinks'>
                            <div  className='linkBoxes'>
                                <img src={linkedIn} alt="" className='bottomIcons'/>
                                <h1 className='bottomLinks'>On <a href='https://www.linkedin.com/feed/?trk=nav_logo'><h1 id='linky'>LinkedIn</h1></a></h1>
                            </div>
                            <div className='linkBoxes'>
                                <img src={gitHubIcon} alt="" className='bottomIcons'/>
                                <h1 className='bottomLinks'>On <a href='https://github.com/Joseangel15'><h1 id='linky'>GitHub</h1></a></h1>
                            </div>
                            <div className='linkBoxes'>
                                <img src={codePen} alt="" className='bottomIcons'/>
                                <h1 className='bottomLinks'>On <a href='https://codepen.io/Joseangel15/'><h1 id='linky'>CodePen</h1></a></h1>
                            </div>
                        </div>
                        <div>
                            <Clipboard 
                                className='emailBtn' 
                                onClick={this.handleClick}
                                data-clipboard-text='joseortizwebdev@gmail.com'
                            >Email</Clipboard>
                        </div>
                    </div>
                    <HashLink smooth to='/#topAnchor'><button id='backBtn'>BACK TO TOP</button></HashLink>
                    <div className='oppositePolygons1'></div>
                    <div className='oppositePolygons2'></div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default MainPage;
