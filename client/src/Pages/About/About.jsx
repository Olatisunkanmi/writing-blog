import './About.css'
import profileImage from '../../Assests/sk.jpg'
import {GitHub, Instagram, LinkedIn, Twitter } from '@material-ui/icons'


const About = () => {
  return (
    <>

<div class="body--container">
     <div class="img--div">
         <img src={profileImage} alt="" class="about-me-img" />
     </div>

     <div class="details--div">

        <div class="top--details">

                <div class="header">
                    <h3 class="header--h3">About </h3>
                    
                    <hr class="header--hr"/>  
                </div>

                <div class="top--details--div">
                        <div class="about--me--details">
                            <p class="about--me--details--para">
                                Hello there and Welcome to my blog. <br />
                                My name is <span>Olasunkanmi. </span>
                                I am a Writer, with actute mind for details. A Self taught backend Software Developer, who is very passionate about learning, as learning never ends.
                                I am also very dedicated to my work.
                                <br />
                                <br />
                                With almost a year of experience as a developer,
                                I have acquired the skills and knowledge
                                necessary to make your project a success. I am open to Internship and Junior positions.
                              </p>
                        </div>


                        <div class="about--me--list-div">
                            <ul class="about--me--ul">
                                <li class="about--me--list"> <span class="about--me--list-span">Name:</span>   Igbasan Olasunkanmi. </li>
                                
                                <li class="about--me--list"> <span class="about--me--list-span">Study:</span>Obafemi Awolowo Univerity, Nigeria. </li>
                                <li class="about--me--list"> <span class="about--me--list-span">Mail:</span> Igbasanolasunkanmi080@gmail.com </li>
                                <li class="about--me--list"> <span class="about--me--list-span">Phone:</span> +234 783 8383 838</li>
                                <li class="about--me--list"> <span class="about--me--list-span">Address:</span> Lagos, Nigeria. </li>
                                
                            </ul>

                           
                        </div>

                     
                </div>


            
        </div>

         
        <div class="bottom--details">

            <div class="bottom--details-div">
                <div class="bottom-right">
                    <h3 class="bottom--h3">Intrests</h3>
                    <hr class="bottom--hr"/>  

                    <div class="hobbies">
                        <ul class="hobbies-ul">
                            <li class="hobbies-li"> Reading and Writing  </li>
                            <li class="hobbies-li"> Music and Karaoke </li>
                            <li class="hobbies-li"> Sports and Games </li>
                            <li class="hobbies-li"> Sports and Games </li>
                        </ul>
                    </div>
                </div>


                <div class="bottom-left">
                <h3 class="bottom--h3"> Services </h3>
                <hr class="bottom--hr"/>  

                <div class="hobbies">
                    <ul class="hobbies-ul">
                        <li class="hobbies-li"> Web Development  </li>
                        <li class="hobbies-li"> Creative and Content Writing  </li>
                        <li class="hobbies-li">Hosting</li>
                        <li class="hobbies-li"> WordPress </li>
                       
                     
                    </ul>
                </div>


                </div>
            </div>

            
        </div> 
     </div>

     
</div>

 <footer>
    <div className="wrapper--container">

            <div className="contact--div">
            <button className='contact--btn'>Contact Me!</button>
            <p>Everything Begins with an Hello !</p>
            </div>

            <div className="social-media">
           <p className='copy'> &#169; Copyright 2022</p>
            <Instagram className='media--icon'/>
            <Twitter className='media--icon'/>
            <LinkedIn className='media--icon'/>
            <GitHub className='media--icon'/>
            </div>
    </div>
           
</footer>
    </>
  )
}

export default About