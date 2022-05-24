import './Services.css';
import {Footer } from '../Index'
import pinball from '../../Assests/pinball.jpg'


const Services = () => {
  return (
        <>
         
            <div className="services--container"> 
                    <div className="services--header">
                    <h3 className='services--h3'>Services </h3>
                    <p className='services--para'>Software Developer & Creative Writer </p>
                    </div>

                    <div className="creative--writing">

                        <div className='creative--writing--text-area'>   
                        <p  className="creative--writing--header">Creative Writing </p>
                        <p  className="creative--writing--para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem enim consequuntur alias, incidunt labore repellat corrupti accusamus officiis, nisi commodi adipisci recusandae? 
                        Perferendis aspernatur et reiciendis repudiandae itaque esse!</p>

                        <button  className="creative--writing--btn">Contact </button>
                        </div>
                       

                        <div>
                            <img src={pinball} alt="" 
                            className="creative--writing--img"/>
                        </div>
                    </div>



                    <div className="software--dev">

                          <div>
                            <img src={pinball} alt="" 
                            className="software--dev--img"/>
                        </div>

                        <div className="software--dev--text-area">
                         <p className="software--dev--header">Software Developer </p>
                        <p className="software--dev--para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem enim consequuntur alias, incidunt labore repellat corrupti accusamus officiis, nisi commodi adipisci recusandae? 
                        Perferendis aspernatur et reiciendis repudiandae itaque esse!</p>

                        <button className="software--dev--btn">Contact </button>
                        </div>
                       

                       
                    </div>
            </div>

            <Footer />
        </>
  )
}

export default Services