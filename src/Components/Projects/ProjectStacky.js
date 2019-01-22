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
             thumbnail: stacky1,
             thumbnailTitle : 'Home Page',
             originalTitle: 'Home Page'},
            {original: stacky2,
             thumbnail: stacky2,
             thumbnailTitle : 'Game Page',
             originalTitle: 'Game Page'}, 
            {original: stacky3,
             thumbnail: stacky3,
             thumbnailTitle : 'Leaderboard Page',
             originalTitle: 'Leaderboard Page'}, 
            {original: stacky4,
             thumbnail: stacky4,
             thumbnailTitle : 'Pause Screen',
             originalTitle: 'Pause Screen'},
        ]

        return (
            <div className='mainSenshiBack'>
                <Navigation />
                <section>
                    <div className= 'projectLink'>
                        <a href='https://stackygame.com/#/'><h1 style={{fontFamily: 'Lobster, cursive', fontSize: '35px', color: '#FF019D', fontWeight: '300' }}>Stacky</h1></a><a href='https://stackygame.com/#/'><h1 style={{ fontSize: '35px', fontFamily: 'Lobster, cursive', color: 'white', fontWeight: '300' }}>Game.com</h1></a>
                    </div>
                    <div className='mainBlocks'>
                        <div className='projectPic'>
                            <ImageGallery items={images} showPlayButton='false' showPlayButton={false} showFullscreenButton={false} autoPlay={true}/>
                        </div>
                        <div className='projectInfo'>
                            <div style={{display: 'flex'}}>
                                <h1 className= 'secondTitle' style={{color: 'rgb(255, 1, 157)'}}>Stacky</h1>
                                <a href='https://github.com/Joseangel15/senshi'><img src={gitHubIcon} alt="" className='gitHubWhite' style={{marginTop: '0px', marginBottom: '10px'}}/></a>
                            </div>
                            <h2 style={{fontFamily: 'Lobster, cursive', fontWeight: '300', fontSize: '25px', textAlign: 'left', marginRight: '70px'}}>Group Developed Web App</h2>
                            <p style={{textAlign: 'left', marginTop: '20px', fontSize: '18px', lineHeight: '1.2'}}>React | JavaScript | CSS | HTML | Node | PostgreSQL | Massive | Postman | Jest | Express | </p>
                            <p style={{textAlign: 'left', marginTop: '20px', fontSize: '18px', lineHeight: '1.2'}}>Stacky is a web application that mixes concepts from Solitaire 2048 and beloved classic Tetris to create a fun and strategic game. Users are able to play the game by selecting a username. The goal of the game is to match blocks with the same number to add those numbers until the block reaches 2048 and dissapears. The level increases based on the player's score. The game ends when a column reaches the top of the board. The score is saved in a leaderboard section where players can see the highest scores for the day, week or month.</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default ProjectStacky;