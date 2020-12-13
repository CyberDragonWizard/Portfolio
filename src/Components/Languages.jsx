import React from 'react';
import './Languages.css';
import HTML from '../Assets/html5-original.svg';
import JS from '../Assets/javascript-original.svg';
import Node from '../Assets/nodejs-original.svg';
import ReactJS from '../Assets/react-original.svg';
import Express from '../Assets/express-original.svg';
import Ruby from '../Assets/ruby-original.svg';
import Rails from '../Assets/rails-original-wordmark.svg';
import PSQL from '../Assets/postgresql-original.svg';
import Mongoose from '../Assets/mongoose.jpg';
import Mongo from '../Assets/mongodb-original.svg';
import MUI from '../Assets/materialui-original.svg';

export default function Languages() {
    return (
        <div className='languages-div'>
            <h2 className='languages'>Languages and Frameworks</h2>
                <div className='list'>

                    <div className='icon-div'>
                        <img src={HTML} className='icon' alt='portimg' height='65px' weight='65px' />
                        <h3 className='item'>HTML5/CSS</h3>
                    </div>
                    
                    <div className='icon-div'>
                    <img src={JS} className='icon' alt='portimg' height='65px' weight='65px' />
                        <h3 className='item'>JavaScript</h3>
                    </div>

                    <div className='icon-div'>
                    <img src={Node} className='icon' alt='portimg' height='65px' weight='65px' />
                        <h3 className='item'>NodeJS</h3>
                    </div>

                    <div className='icon-div'>
                    <img src={ReactJS} className='icon' alt='portimg' height='65px' weight='65px' />
                        <h3 className='item'>ReactJS</h3>
                    </div>

                    <div className='icon-div'>
                    <img src={Express} className='icon' alt='portimg' height='65px' weight='65px' />
                        <h3 className='item'>ExpressJS</h3>
                    </div>

                    <div className='icon-div'>
                    <img src={Ruby} className='icon' alt='portimg' height='65px' weight='65px' />
                        <h3 className='item'>Ruby</h3>
                    </div>

                    <div className='icon-div'>
                    <img src={Rails} className='icon' alt='portimg' height='65px' weight='65px' />
                        <h3 className='item'>Rails</h3>
                    </div>

                    <div className='icon-div'>
                    <img src={PSQL} className='icon' alt='portimg' height='65px' weight='65px' />
                        <h3 className='item'>PostgreSQL</h3>
                    </div>

                    <div className='icon-div'>
                    <img src={Mongoose} className='icon' alt='portimg' height='65px' weight='65px' />
                        <h3 className='item'>Mongoose</h3>
                    </div>

                    <div className='icon-div'>
                    <img src={Mongo} className='icon' alt='portimg' height='65px' weight='65px' />
                        <h3 className='item'>MongoDB</h3>
                    </div>

                    <div className='icon-div-last'>
                    <img src={MUI} className='icon' alt='portimg' height='65px' weight='65px' />
                        <h3 className='item'>Material-UI</h3>
                    </div>
                    
                </div>
            
        </div>
    )
}
