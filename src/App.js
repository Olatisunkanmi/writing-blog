import {Topbar, Home, Post, Services, Login, About } from './Components/Index';
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
        <Route exact path='/' element={<Home />} /> 
        <Route exact path='/about' element={<About />} /> 
        <Route  path='/Post' element={<Post />} /> 
        <Route  path='/Login' element={<Login />} /> 
        <Route  path='/Services' element={<Services />} /> 
       </Routes>
    </BrowserRouter>

    </div>


   
    </>
    
 



  );
}

export default App;
