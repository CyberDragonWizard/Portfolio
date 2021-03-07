import React from 'react';
import './Projects.css';
import Book from '../Assets/bookshelf.png';
import HackerAmp from '../Assets/hackeramp.png';
import Ballot from '../Assets/ballot.png';
import Whenieat from '../Assets/whenieat.png';
import JS from '../Assets/javascript-original.svg';
import HTML from '../Assets/html5-original.svg';
import ReactJS from '../Assets/react-original.svg';
import Express from '../Assets/express-original.svg';
import Ruby from '../Assets/ruby-original.svg';
import Rails from '../Assets/rails-original-wordmark.svg';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import BookShelfModal from './BookShelfModal';
import Angular from '../Assets/angular-seeklogo.com.svg';
import HackerAmpModal from './HackerAmpModal';
import ElectionModal from './ElectionModal';
import WhenieatModal from './WhenieatModal'

const useStyles = makeStyles((theme) => ({
    github: {
      color: '#97AABD',
      cursor: 'pointer',
      marginTop: '8px',
      marginLeft: '12px',
      float: 'left',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        color: '#314456;',
    }
    }
    
  }));

export default function Projects() {
    const classes = useStyles();

    return (
        <div className='projects-div'>
            <h2 className='projects'>Projects</h2>
                <div className='projects-list'>

                    <div className='project-div'>
                        <a href ='https://cyberdragonwizard.github.io/BookShelf/' target = "_blank">
                            <img src={Book} className='project-img' alt='portimg' height='60%' width='100%'/>
                        </a>
                        <div className='icon-list'>
                            <img src={HTML} className='icon' alt='portimg' height='35px' weight='35px' />
                            <img src={JS} className='icon' alt='portimg' height='35px' weight='35px' />
                        </div>
                        <div>
                        <a href = "https://github.com/CyberDragonWizard/BookShelf" target = "_blank">
                            <GitHubIcon style={{ fontSize: '40px' }} className={classes.github} />
                        </a>
                        </div>
                        <BookShelfModal />
                    </div>

                    <div className='project-div'>
                        <a href ='https://hackeramp.herokuapp.com/' target = "_blank">
                            <img src={HackerAmp} className='project-img' alt='portimg' height='60%' width='100%'/>
                        </a>
                        <div className='icon-list'>
                            <img src={HTML} className='icon' alt='portimg' height='35px' weight='35px' />
                            <img src={JS} className='icon' alt='portimg' height='35px' weight='35px' />
                            <img src={Express} className='icon' alt='portimg' height='35px' weight='35px' />
                            <img src={Angular} className='icon' alt='portimg' height='35px' weight='35px' />
                        </div>
                        <div>
                        <a href = "https://github.com/CyberDragonWizard/HackerAmp" target = "_blank">
                            <GitHubIcon style={{ fontSize: '40px' }} className={classes.github} />
                        </a>
                        </div>
                        <HackerAmpModal />
                    </div>

                    <div className='project-div'>
                        <a href ='https://ballot-request-elections-app.netlify.app/' target = "_blank">
                            <img src={Ballot} className='project-img' alt='portimg' height='60%' width='100%'/>
                        </a>
                    <div className='icon-list'>
                            <img src={HTML} className='icon' alt='portimg' height='35px' weight='35px' />
                            <img src={JS} className='icon' alt='portimg' height='35px' weight='35px' />
                            <img src={ReactJS} className='icon' alt='portimg' height='35px' weight='35px' />
                            <img src={Express} className='icon' alt='portimg' height='35px' weight='35px' />
                        </div>
                        <div>
                        <a href = "https://github.com/CyberDragonWizard/election-app" target = "_blank">
                            <GitHubIcon style={{ fontSize: '40px' }} className={classes.github} />
                        </a>
                        </div>
                        <ElectionModal />
                    </div>

                    <div className='project-div-last'>
                    <a href ='https://keen-blackwell-031369.netlify.app/' target = "_blank">
                        <img src={Whenieat} className='project-img' alt='portimg' height='60%' width='100%'/>
                    </a>
                    <div className='icon-list'>
                            <img src={HTML} className='icon' alt='portimg' height='35px' weight='35px' />
                            <img src={JS} className='icon' alt='portimg' height='35px' weight='35px' />
                            <img src={ReactJS} className='icon' alt='portimg' height='35px' weight='35px' />
                            <img src={Ruby} className='icon' alt='portimg' height='35px' weight='35px' />
                            <img src={Rails} className='icon' alt='portimg' height='35px' weight='35px' />
                        </div>
                        <div>
                        <a href = "https://github.com/CyberDragonWizard/WhenIEat" target = "_blank">
                            <GitHubIcon style={{ fontSize: '40px' }} className={classes.github} />
                        </a>
                        </div>
                        <WhenieatModal />
                    </div>

                </div>
            
        </div>
    )
}
