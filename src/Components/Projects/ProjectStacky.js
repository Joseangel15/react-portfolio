import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import gitHubIcon from '../../Assets/github white.png';
import './ProjectSenshi.css';
import ImageGallery from 'react-image-gallery';
import stacky1 from '../../Assets/Stacky Start Screen.PNG';
import stacky2 from '../../Assets/Stacky Game.PNG';
import stacky3 from '../../Assets/Stacky Leaderboard.PNG';
import stacky4 from '../../Assets//PauseScreen.PNG';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

class ProjectStacky extends Component{


    render() {

        const images = [
            {original: stacky1,
             thumbnail: stacky1},
            {original: stacky2,
             thumbnail: stacky2}, 
            {original: stacky3,
             thumbnail: stacky3}, 
            {original: stacky4,
             thumbnail: stacky4},
        ]

        return (
            <div className='mainSenshiBack'>
                <Navigation />
                <section>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px', marginRight: '570px'}}>
                        <a href='https://stackygame.com/#/'><h1 style={{fontFamily: 'Lobster, cursive', fontSize: '35px', color: '#FF019D', fontWeight: '300' }}>Stacky</h1></a><a href='https://stackygame.com/#/'><h1 style={{ fontSize: '35px', fontFamily: 'Lobster, cursive', color: 'white', fontWeight: '300' }}>Game.com</h1></a>
                    </div>
                    <div className='mainBlocks'>
                        <div className='projectPic'>
                            <ImageGallery items={images} showPlayButton='false'/>
                        </div>
                        <div className='projectInfo'>
                            <div style={{display: 'flex'}}>
                                <h1 style={{color: '#FF019D', fontFamily: 'Lobster, cursive', fontSize: '30px', fontWeight: '300', textAlign: 'left', marginBottom: '20px', marginRight: '330px'}}>Stacky</h1>
                                <a href='https://github.com/Joseangel15/senshi'><img src={gitHubIcon} alt="" className='gitHubWhite' style={{marginTop: '0px', marginBottom: '10px'}}/></a>
                            </div>
                            <h2 style={{fontFamily: 'Lobster, cursive', fontWeight: '300', fontSize: '25px', textAlign: 'left', marginRight: '70px'}}>Personally Developed</h2>
                            <p style={{textAlign: 'left', marginTop: '20px', fontSize: '18px', lineHeight: '1.2'}}>Stacky is a game that mixes concepts from Solitaire 2048 and beloved classic Tetris to create a fun and strategic challenge. This was my first attempt to engage in the creation of a game and it was challenging.

</p>
                            <p style={{textAlign: 'left', marginTop: '20px', fontSize: '18px', lineHeight: '1.2'}}>The game was created through the use of React.js, Node.js, express-sessions and PostgreSQL. Jest and Postman were used to test game functionality and endpoints. I had a lot of fun and learned to apply complicated JavaScript methods to achieve our purpose. One of the best things about this project was the opportunity to learn from my teammates. 
</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default ProjectStacky;