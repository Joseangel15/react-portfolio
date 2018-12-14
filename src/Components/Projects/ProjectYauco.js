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
             thumbnail: yauco1},
            {original: yauco2,
             thumbnail: yauco2}, 
            {original: yauco3,
             thumbnail: yauco3}, 
            {original: yauco4,
             thumbnail: yauco4},
            {original: yauco5,
             thumbnail: yauco5}
        ]

        return (
            <div className='mainSenshiBack'>
                <Navigation />
                <section>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px', marginRight: '570px'}}>
                        <a href='https://www.visityauco.com/#/'><h1 style={{fontFamily: 'Lobster, cursive', fontSize: '35px', color: '#ffe100', fontWeight: '300' }}>Visit</h1></a><a href='https://www.visityauco.com/#/'><h1 style={{ fontSize: '35px', fontFamily: 'Lobster, cursive', color: 'white', fontWeight: '300' }}>Yauco.com</h1></a>
                    </div>
                    <div className='mainBlocks'>
                        <div className='projectPic'>
                            <ImageGallery items={images} showPlayButton='false'/>
                        </div>
                        <div className='projectInfo'>
                            <div style={{display: 'flex'}}>
                                <h1 style={{color: '#ffe100', fontFamily: 'Lobster, cursive', fontSize: '30px', fontWeight: '300', textAlign: 'left', marginBottom: '20px', marginRight: '330px'}}>VisitYauco</h1>
                                <a href='https://github.com/Joseangel15/senshi'><img src={gitHubIcon} alt="" className='gitHubWhite' style={{marginTop: '0px', marginBottom: '10px'}}/></a>
                            </div>
                            <h2 style={{fontFamily: 'Lobster, cursive', fontWeight: '300', fontSize: '25px', textAlign: 'left', marginRight: '70px'}}>Personally Developed</h2>
                            <p style={{textAlign: 'left', marginTop: '20px', fontSize: '18px', lineHeight: '1.2'}}>VisitYauco.com is a web page that promotes tourism to my home town of Yauco, Puerto Rico. I felt a deep nostalgia during the creation process, as I remembered the places that made me who I am.</p>
                            <p style={{textAlign: 'left', marginTop: '20px', fontSize: '18px', lineHeight: '1.2'}}>I wanted to experiment with different APIs, and for this purpose I incorporated the Google maps API, the News API and the Open Weather Map API. The website was created with React.js, node.js, PostgreSQL, and Redux. The site contains a store that uses Stripe to process payment transactions, and I also used node-mailer to allow site users to contact me via email.
</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default ProjectYauco;