import React, { Component } from 'react';
import Footer from './Footer/Footer';
import './MainPage.css';
import photo from '../Assets/Selfie.jpg';


class MainPage extends Component {

    render() {

        const titles = {
            fontFamily: 'Lobster, cursive',
            color: '#51E516',
            fontSize: '50px'
        }

        const contactBtn = { 
            margin: '10px', 
            height: '40px',
            border: 'none',
            backgroundColor: 'rgba(17, 42, 75, 1)',
            color: 'white',
        }

        const upperInputs = {
            margin: '10px', 
            marginTop: '30px', 
            width: '195px', 
            height: '30px', 
            backgroundColor: 'rgba(11, 19, 43, 1)', 
            border: '1px solid white'
        }
    

        return (
            <div>
                <section className='background'>
                    <div className='mntPic'>
                        <div className='imgFilter'>
                            <div id='greetingPage'>
                                <h1 id='webDev'>let Web Developer =</h1>
                                <h1 id='myName'>"Jose A Ortiz"</h1>
                                <h1 id='quote'>It's not about what's in, but what's next</h1>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='background'>
                    <div className='personalInfoBox'>
                        <div className='photoAboutMe'>
                            <img src={photo} alt="" id='persPic' />
                            <h1>Const About Me =
                                <h2>favMovie: Music: favSuperHero: homeTown: favFood: favBook: favVideoGame: favSport:</h2>
                                <h2>"7 Samurai" "classical and electronic" "Batman" "Yauco, PR" "Peruvian Food" "Meditations by Marcus Aurelius" "Red Dead Redemption" "Martial Arts"</h2>
                            </h1>
                        </div>
                        <div className='myInfoColumn'>
                            <h1>ALLOW TO INTRODUCE MYSELF</h1>
                            <p>As a married man and father of a smart, and energetic four year old girl (Elena), I love to dedicate a big part of my time to create experiences that will bring us closer together as a family.</p>

                            <p>I graduated from college in 2013 with a Bachelor's degree in Digital Video Production, where I was lucky enough to work on student projects and major productions, meet amazing people, and learn a ton. Watching and talking about movies is one of my favorite hobbies. Video editing was one of my favorite things to do.</p>

                            <p>Technology has been a big driving force in my career choices. My recent professional experience includes working as a client consultant for the Microsoft Store and I also worked in Human Resources data entry systems. As much as I enjoyed and learned from these opportunities, I could not find what I really wanted to do until I learned about coding and Web Development.</p>

                            <p>Learning how to code and create web applications has been one the most fun, exciting and challenging things that I have ever done, and I LOVE IT! The chance to solve problems  and learn something new every day is fulfilling. As a Web Developer I get to combine my love of technology with the chance to use my creativity in different ways. I can't wait to see what lessons tomorrow will bring.</p>
                        </div>
                    </div>
                </section>

                <section className='background'>
                    <h1 style={titles}>Skills</h1>
                    <div>

                    </div>
                </section>

                <section className='background'>
                    <h1 style={titles}>Projects</h1>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </section>

                <section>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </section>

                <section>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </section>

                <section>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </section>

                <section className='background'>
                    <h1 style={titles}>Let's Talk</h1>
                    <div className='jungleBack'>
                        <div className='jungleFilter'>
                            <div style={{width: '450px', margin: 'auto', marginTop: '20px' }}>
                                <div >
                                    <input type="text" placeholder='Your Name *' style={upperInputs} />
                                    <input type="text" placeholder='Your Email *' style={upperInputs}/>
                                </div>
                                <div className='lowerInputs' >
                                    <input type="text" placeholder='Your Phone No. *' style={{margin: '10px', height: '30px', color: 'rgba(81, 229, 22)', backgroundColor: 'rgba(11, 19, 43, 1)', border: '1px solid white'}} />
                                    <textArea type="text" placeholder='Ask me anything...' style={{margin: '10px', height: '150px', color: '#51E516', backgroundColor: 'rgba(11, 19, 43, 1)'}}/>
                                    <button style={contactBtn}>Get in Touch</button>
                                    <button style={contactBtn}>BACK TO TOP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />

            </div>
        )
    }
}

export default MainPage;
