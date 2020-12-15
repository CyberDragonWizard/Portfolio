import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Whenieat from '../Assets/whenieat.png';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.184)',
    padding: theme.spacing(2, 4, 3),
    borderRadius: '8px',
    outline: 'none',
    width: '600px',
    marginBottom: '2%',
    position: 'fixed',
    height: '510px'
  },
  button: {
      fontFamily: 'Titillium Web',
      color: 'white',
      fontSize: '14px',
      backgroundColor: '#314455',
      fontWeight: 600,
      border: 'none',
      outline: 'none',
      height: '30px',
      width: '90px',
      borderRadius: '6px',
      cursor: 'pointer',
      float: 'right',
      marginRight: '12px',
      marginTop: '17px',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        backgroundColor: '#49657e',
    }

  }
}));

export default function WhenieatModal() {
 
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <button className={classes.button} type="button" onClick={handleOpen}>
        Project Info
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <p className='paragraph-info-whenieat'>
            WhenIEat is a full-stack nutrition and calorie tracker, built off of ReactJS and Ruby on Rails.
            Note: the front-end is still curently in development.
            </p>
            <img src={Whenieat} className='project-img-modal' alt='portimg' />
     
        
          </div>
        </Fade>
      </Modal>
    </div>
  );
}