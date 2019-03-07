import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import gitHubIcon from '../../Assets/github white.png';
import './ProjectSenshi.css';
import ImageGallery from 'react-image-gallery';
import yauco1 from '../../Assets/VYhomePage.PNG';
import yauco2 from '../../Assets/menu.PNG';
import yauco3 from '../../Assets/DestinationsPage.PNG';
import yauco4 from '../../Assets/MapPage.PNG';
import yauco5 from '../../Assets//StorePage.PNG';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';


class ProjectYauco extends Component{


    render() {

        const images = [
            {original: yauco1,
             thumbnail: yauco1,
             thumbnailTitle : 'Home Page',
             originalTitle: 'Home Page' },
            {original: yauco2,
             thumbnail: yauco2,
             thumbnailTitle : 'Home Page Navigation',
             originalTitle: 'Home Page Navigation'}, 
            {original: yauco3,
             thumbnail: yauco3,
             thumbnailTitle : 'Destinations Page',
             originalTitle: 'Destinations Page'}, 
            {original: yauco4,
             thumbnail: yauco4,
             thumbnailTitle : 'Weather Page',
             originalTitle: 'Weather Page'},
            {original: yauco5,
             thumbnail: yauco5,
             thumbnailTitle : 'Online Store',
             originalTitle: 'Online Store'}
        ]

        const justYauco = {

        }

        return (
            <div className='mainSenshiBack'>
                <Navigation />
                <section>
                    <div className= 'projectLink'>
                        <a href='https://www.visityauco.com/#/'><h1 style={{fontFamily: 'Lobster, cursive', fontSize: '35px', color: '#ffe100', fontWeight: '300' }}>Visit</h1></a><a href='https://www.visityauco.com/#/'><h1 style={{ fontSize: '35px', fontFamily: 'Lobster, cursive', color: 'white', fontWeight: '300' }}>Yauco.com</h1></a>
                    </div>
                    <div className='mainBlocks'>
                        <div className='projectPic'>
                            <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} autoPlay={true}/>
                        </div>
                        <div className='projectInfo'>
                            <div style={{display: 'flex'}}>
                                <h1 className= 'secondTitle' style={{color: 'rgb(255, 225, 0)', marginRight: '140px'}}>VisitYauco</h1>
                                <a href='https://github.com/Joseangel15/senshi'><img src={gitHubIcon} alt="" className='gitHubWhite' id='yauco-github-logo' /></a>
                            </div>
                            <h2 style={{fontFamily: 'Lobster, cursive', fontWeight: '300', fontSize: '25px', textAlign: 'left', marginRight: '70px'}}>Personally Developed Web App</h2>
                            <p style={{textAlign: 'left', marginTop: '20px', fontSize: '18px', lineHeight: '1.2', fontWeight: '600'}}>React | JavaScript | CSS | HTML | Redux | Node | PostgreSQL | Massive | Nodemailer | Google Maps API | NewsAPI | Open Weather Map API</p>
                            <p style={{textAlign: 'left', marginTop: '20px', fontSize: '18px', lineHeight: '1.2'}}>VisitYauco.com is a web application that promotes tourism to my home town of Yauco, Puerto Rico. The site is divided into multiple sections for users to discover useful information about the city's history and interesting destinations. Users can visit an online store that uses Stripe to process payment transactions, and I also incorporated node-mailer to allow site users to contact the development team via email.</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default ProjectYauco;