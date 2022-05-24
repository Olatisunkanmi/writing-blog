import './CardList.css';
import gamble from "../../Assests/gamble.jpg";
 

const CardList = () => {
  return (
      <>
      
      
    <div className='CardList'>
      <img src={gamble}
      alt="image-Post"  className='CardImg'/>


      <div className="CardInfo">
           <span className="CardTitle">The Tales we never told</span>
          <div className='CardList--date--cat'>
          <span className="CardDate">Sept. Date</span>
          <span className="CardCat">Music</span>
          <span className="CardCat">Lifestyle</span>
          </div>

          <span className="CardDesc">Lorem ipsum, dolor sit amet con
          sectetur adipisicing elit. Nostrum id nulla suscipit alias t
          enetur magnam nisi, incidunt accusamus dolor voluptatibus at r
          em ea aperiam voluptate sunt?
          Autem perspiciatis itaque quibusdam.</span>
          <button className='cardBtn'> Read More </button>
      </div>

     
    </div>


    </>

  )
}

export default CardList