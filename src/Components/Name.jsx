import React from 'react';
import ProfileImg from '../Assets/portfolio.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-scroll";
import './Name.css'

const useStyles = makeStyles((theme) => ({
    icon: {
      color: '#97AABD',
      cursor: 'pointer',
      marginTop: '38px',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        color: '#314456;',
    }
    }
    
  }));


export default function Name() {
    const classes = useStyles();

    return (
        <div className='name-container'>
            <div className='names-div'>
            <   h1 className='names'>Brian <br/> Nester</h1>
                <h2 className='subname'>Software Engineer</h2>
            </div>
            <div className='pic-info'>
                <img className='port-img' src={ProfileImg} alt='portimg' height='255px' weight='255px' />
                <div className='icon-links'>
                    
                    <a href = "https://github.com/CyberDragonWizard" target = "_blank" rel="noopener noreferrer">
                        <GitHubIcon style={{ fontSize: '40px' }} className={classes.icon} />
                    </a>

                    <a href = "https://www.linkedin.com/in/brian-nester-6a168710b/" target = "_blank" rel="noopener noreferrer">
                        <LinkedInIcon style={{ fontSize: '40px' }} className={classes.icon}/>  
                    </a>

                    <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    >
                    <EmailIcon style={{ fontSize: '40px' }} className={classes.icon}/>
                    </Link>
                    
                </div>
            </div>

        </div>
    )
}
