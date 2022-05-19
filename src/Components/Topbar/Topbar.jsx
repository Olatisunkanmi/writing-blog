import './Topbar.css'
import { Search, NightsStay } from '@material-ui/icons';

const Topbar = () => {
  return (
   <div className='top'>
        <div className="top--Left">
            <img src="../Img/img.jpeg" alt="Profile pic" className='top--img'/>
        </div>


        <div className="top--Center">
                <ul className='top--center-ul'>
                    <li className='top--center-list'>Home</li>
                    <li className='top--center-list'>Blog Post</li>
                    <li className='top--center-list'>About</li>
                    <li className='top--center-list'>Authors </li>
                    <li className='top--center-list'>Contact</li>
                </ul>
        </div>


        <div className="top--Right">
            <ul className='top--Right-ul'>
                <li className='top--Right-list'> Login </li>
                <li className='top--Right-list'> Subscribe </li>
                <NightsStay />
            </ul>
            
        </div>
   </div>
  
  )
}

export default Topbar;