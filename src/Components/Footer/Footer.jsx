import React from 'react';
import './Footer.css'
import { Instagram } from '@material-ui/icons';

const Footer = () => {
  return (
    <>
        <div className="footer-container">
            <div className="row">
            
            <div className="footer--tags">
                        <h4 className='footer--heads'>Tags</h4>
                            <div className="Tags--list-div">
                                <p className='tags-list'>Earth</p>
                                <p className='tags-list'>Dance</p>
                                <p className='tags-list'>Old - buildings</p>
                                
                                
                            </div>
                    </div>



                    <div className="footer--Sub">
                        <h4 className='footer--heads'>Subscribe Via Email</h4>
                        <p className='footer--noti'>Receive notifications of new posts.</p>
                        <input type="text"  
                        placeholder='Enter Your E-mail Address'
                        className='search--bar'/>

                        <button className='footer--subscribe'> Subscribe </button>
                    </div>


                    <div className="footer--Cats">
                        <h4 className='footer--heads'>Categories</h4>
                            <ul>
                                <li>Lifestyle</li>
                                <li>Travel</li>
                                <li>Travel</li>
                                <li>Travel</li>
                               
                            </ul>
                    </div>
                
            </div>
            

        <div className='copyright'>
            
            <p>  2020 | All Rights Reserved</p>
            
           
        </div>
            
        </div>
    </>
  )
}

export default Footer