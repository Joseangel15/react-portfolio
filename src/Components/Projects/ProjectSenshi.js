import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import gitHubIcon from '../../Assets/github white.png';
import './ProjectSenshi.css';
import ImageGallery from 'react-image-gallery';
import senshi1 from '../../Assets/Senshi site Home.PNG';
import senshi2 from '../../Assets/Account_page.PNG';
import senshi3 from '../../Assets/Senshi_school_info.PNG';
import senshi4 from '../../Assets/About_page.PNG';
import senshi5 from '../../Assets/Senshi site Home page.PNG';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';



class ProjectSenshi extends Component {


    render() {

        const images = [
            {original: senshi1,
             thumbnail: senshi1},
            {original: senshi2,
             thumbnail: senshi2}, 
            {original: senshi3,
             thumbnail: senshi3}, 
            {original: senshi4,
             thumbnail: senshi4},
            {original: senshi5,
             thumbnail: senshi5}
        ]

        return (
            <div className='mainSenshiBack'>
                <Navigation />
                <section>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px', marginRight: '570px'}}>
                        <a href='https://senshiwarrior.com/'><h1 style={{fontFamily: 'Lobster, cursive', fontSize: '35px', color: '#CE121B', fontWeight: '300' }}>Senshi</h1></a><a href='https://senshiwarrior.com/'><h1 style={{ fontSize: '35px', fontFamily: 'Lobster, cursive', color: 'white', fontWeight: '300' }}>Warrior.com</h1></a>
                    </div>
                    <div className='mainBlocks'>
                        <div className='projectPic'>
                            <ImageGallery items={images} showPlayButton='false'/>
                        </div>
                        <div className='projectInfo'>
                            <div style={{display: 'flex'}}>
                                <h1 style={{color: '#CE121B', fontFamily: 'Lobster, cursive', fontSize: '30px', fontWeight: '300', textAlign: 'left', marginBottom: '20px', marginRight: '330px'}}>Senshi</h1>
                                <a href='https://github.com/Joseangel15/senshi'><img src={gitHubIcon} alt="" className='gitHubWhite' style={{marginTop: '0px', marginBottom: '10px'}}/></a>
                            </div>
                            <h2 style={{fontFamily: 'Lobster, cursive', fontWeight: '300', fontSize: '25px', textAlign: 'left', marginRight: '70px'}}>Personally Developed</h2>
                            <p style={{textAlign: 'left', marginTop: '20px', fontSize: '18px', lineHeight: '1.2'}}>Senshi is a web page for martial arts schools to promote themselves and establish connections to other schools and practitioners. Users are able to search for schools based on their respective martial art style and see their information. They can also create a page for a MA school where they are able to enter, delete and edit its information through the account page.</p>
                            <p style={{textAlign: 'left', marginTop: '20px', fontSize: '18px', lineHeight: '1.2'}}>The application was created through the use of React.js, PostgreSQL and Node.js. I also incorporated the use of Redux and outside technologies like Auth0. I had a lot of fun building this site and learned many foundational skills of web development.</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default ProjectSenshi;