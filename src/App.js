import {Topbar, Home, Footer, Header, Post, Services } from './Components/Index'
import './App.css';


function App() {

  return (

    <>
      
    <Topbar />
    <div className='container'>

    <Header />
    <Home />

    {
      // <Services />
      // <Header />
      //  <Post />
      //  <Home />
    }

    </div>


    <Footer />
    </>
    
 



  );
}

export default App;
