import './SinglePost.css';
import  love from '../../Assests/love.jpg';
import { Comment, MenuBook, Person, Timeline, Timer } from '@material-ui/icons';

const SinglePost = () => {
  return (
    <> 
    
    <img src={love} alt="image" 
        className='post--img'/>
        <div className="post--container">
           

            <p className='post--title'>If You Ever Find love, like my Grandma Did </p>

            <div className='post--cat'>
            <MenuBook className='post--icon'/> <p> Lifestyle</p>
            </div>

            <div className='post--auth--date--com'>
            <Person className='post--icon'/> <p className='post--author'> Sarah Banks </p>
             <Timer className='post--icon'/> <p className='post--date'> Sept, 9 2019 </p> 
                 <Comment className='post--comment post--icon'/>
            
            </div>
        </div>
    </>
  )
}

export default SinglePost