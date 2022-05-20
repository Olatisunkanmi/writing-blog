import {Topbar, Home, Footer, Header, Post } from './Components/Index'
import './App.css';


function App() {

  return (

    <>
      
    <Topbar />
    <div className='container'>
      <Header />
      <Post />
    {
        // <Home />
    }

    </div>


    <Footer />
    </>
    
 



  );
}

export default App;
