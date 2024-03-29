import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Ballot from '../Assets/ballot.png';

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

export default function ElectionModal() {
 
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
          <p className='paragraph-info-election'>
          This election ballot app is a full-stack ballot request app built off of ReactJS and ExpressJS. This
                app was built by a team of four developers, as well as team of five UX designers.
            </p>
            <img src={Ballot} className='project-img-modal' alt='portimg' />
        
          </div>
        </Fade>
      </Modal>
    </div>
  );
}