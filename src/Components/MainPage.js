import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import swal from 'sweetalert2';
import axios from 'axios';
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

        this.state = {
            name: '',
            phone: '',
            email: '',
            message: '',
        }

        this.inputHandler = this.inputHandler.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.handleComponentMount = this.handleComponentMount.bind(this);
    }

    componentDidMount() {

    }

    handleComponentMount(){
        this.setState({
            name: '',
            phone: '',
            email: '',
            message: '',
        })
    }

    inputHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    sendEmail(){
        
        const toast = swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000
        })

        let { name, phone, email, message } = this.state
        let info = {
            name,
            phone,
            email,
            message,
        }
        axios.post('/api/message/', info).then(res => {

        })
        this.handleComponentMount()
        toast({
            type: 'success',
            title: 'Message Sent'
        })
    }

    render() {

        const projectCardInfo2 = {
            marginTop: '20px',
            fontSize: '22px'
        }

        return (
            <div className='mainBack'>
                <Navigation />
                <section className='introBack' >
                    <div style={{ position: 'relative', top: '200px' }}>
                        <h1 className='myName'>Jose A. Ortiz</h1>
                        <hr style={{ width: '600px', margin: 'auto', height: '0', border: 'none', borderTop: '3px solid white' }} />
                        <h2 className='myTitle'>Full Stack Web Developer</h2>
                    </div>
                </section>
                <section className='aboutMeSection' id='aboutMeDown'>
                    <div className="arrow-down">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <h1 style={{ marginRight: '20px', fontSize: '55px', color: 'white' }}>About</h1><h1 style={{ fontSize: '55px', fontFamily: 'Lobster, cursive', color: '#51E516' }}>Me</h1>
                        </div>
                    </div>
                    <div className='introducePara' style={{ width: '479px', height: '572px', fontSize: '20px', marginLeft: '115px', fontFamily: 'Roboto, sans-serif' }}>
                        <h2 style={{ color: 'white', textAlign: 'left', marginBottom: '20px', fontSize: '25px' }}>
                            Allow to Introduce Myself
                        </h2>
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
                        <h1 style={{ position: 'relative', top: '30px', fontSize: '55px', color: 'white' }}>Skills</h1>
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
                            <img src={reactLogo} alt="" className='skillLogo' style={{ width: '205px' }} />
                            <h1 className='skillName'>React.js</h1>
                        </div>
                        <div className='skillCard'>
                            <img src={nodeLogo} alt="" className='skillLogo' style={{ width: '145px' }} />
                            <h1 className='skillName'>Node.js</h1>
                        </div>
                    </div>
                    <div className='cardsBottom'>
                        <div className='skillCard'>
                            <img src={postgresLogo} alt="" className='skillLogo' />
                            <h1 className='skillName'>PostgreSQL</h1>
                        </div>
                        <div className='skillCard'>
                            <img src={postmanLogo} alt="" className='skillLogo' style={{ width: '130px' }} />
                            <h1 className='skillName'>Postman</h1>
                        </div>
                        <div className='skillCard'>
                            <img src={gitLogo} alt="" className='skillLogo' style={{ width: '130px' }}/>
                            <h1 className='skillName'>Git</h1>
                        </div>
                        <div className='skillCard'>
                            <img src={jestLogo} alt="" className='skillLogo' style={{ width: '130px' }}/>
                            <h1 className='skillName'>Jest</h1>
                        </div>
                        <div className='skillCard'>
                            <img src={sassLogo} alt="" className='skillLogo' style={{ width: '140px' }} />
                            <h1 className='skillName'>Sass</h1>
                        </div>
                    </div>
                    <div className='slideDown'></div>
                    <div style={{width: '100%', height: '75px', backgroundColor: '#454545', position: 'relative', bottom: '196px', boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.1), 0 6px 6px 0 rgba(0, 0, 0, 0.2)'}}></div>
                </section>
                <section className='projectSection' id='projectDown'>
                    <h1 style={{ position: 'relative', top: '100px', fontSize: '55px', color: 'white' }}>Projects</h1>
                    <div style={{ width: '1000px', height: '500px', margin: 'auto', marginTop: '150px', display: 'flex', justifyContent: 'center' }}>
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
                <section className='contactSection'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <h1 style={{ marginRight: '20px', fontSize: '55px', color: 'white', marginTop: '30px' }} >Get in</h1><h1 style={{ fontSize: '55px', fontFamily: 'Lobster, cursive', color: '#51E516', marginTop: '30px' }}>Touch</h1>
                    </div>
                    <div style={{ width: '800px', height: '500px', backgroundColor: '#454545', margin: 'auto', marginTop: '20px', boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.1), 0 6px 6px 0 rgba(0, 0, 0, 0.2)' }} id='contactDown'>
                        <div style={{paddingTop: '20px'}}>
                            <input type="text" placeholder='Name' name='name' value={this.state.name} onChange={this.inputHandler} style={{ width: '295px', height: '44px', margin: '20px', fontFamily: 'Lobster, cursive', fontSize: '24px' }} />
                            <input type="text" placeholder='Phone#' name='phone' value={this.state.phone} onChange={this.inputHandler} style={{ width: '295px', height: '44px', margin: '20px', fontFamily: 'Lobster, cursive', fontSize: '24px' }} />
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <input type="text" placeholder='Email' name='email' value={this.state.email} onChange={this.inputHandler} style={{ width: '630px', height: '44px', margin: 'auto', fontFamily: 'Lobster, cursive', fontSize: '24px' }} />
                            <textarea name="message" id="" cols="30" rows="10" placeholder='Ask Me Anything...' value={this.state.message} onChange={this.inputHandler} style={{ width: '630px', height: '162px', margin: 'auto', marginTop: '20px', fontFamily: 'Lobster, cursive', fontSize: '24px' }}></textarea>
                            <button onClick={this.sendEmail} style={{margin: 'auto', marginTop: '30px', width: '171px', height: '41px', fontFamily: 'Lobster, cursive', fontSize: '24px' }}>Send Message</button>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', height: '50px', marginTop: '30px', marginLeft: '35px'}}>
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
                    </div>
                    <HashLink smooth to='/Home#homeUp'><button id='backBtn'>BACK TO TOP</button></HashLink>
                    <div className='oppositePolygons1'></div>
                    <div className='oppositePolygons2'></div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default MainPage;
