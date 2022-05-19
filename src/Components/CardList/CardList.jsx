import './CardList.css';
import NewImage from "../../Assests/img.jpeg";

const CardList = () => {
  return (


    <div className='CardList'>
      <img src={NewImage}
      alt="image-Post" />

      <div className="CardInfo">
        <span className="CardDate">Sept. Date</span>
        <span className="CardCat">Music</span>
        <span className="CardCat">Lifestyle</span>
      </div>

      <span className="CardTitle">The Tales we never told</span>
      <span className="CardDesc">Lorem ipsum, dolor sit amet con
      sectetur adipisicing elit. Nostrum id nulla suscipit alias t
      enetur magnam nisi, incidunt accusamus dolor voluptatibus at r
      em ea aperiam voluptate sunt?
       Autem perspiciatis itaque quibusdam.</span>
    </div>
  )
}

export default CardList