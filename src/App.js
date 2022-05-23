import {Topbar, Home, Footer, Header, Post, Services, Login, About } from './Components/Index';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css';


function App() {

  return (

    <>
      
    <Topbar />
    <div className='container'>
    <BrowserRouter>   
        <Routes> 
            <Route  
       </Routes>
    </BrowserRouter>

    {

     
      
    // <About />
    // <Home /> 
      //  <Services />
      // 
      //  <Post />
      // <Login />
    
    }

    </div>


   
    </>
    
 



  );
}

export default App;
