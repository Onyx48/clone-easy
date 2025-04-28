import React from "react";
import Header from "../Header/Header";
import Home from './../Home/Home';


function Container() {
  return (
    
    <div className='w-full h-screen bg-[url(https://img.freepik.com/free-vector/gradient-dark-dynamic-lines-background_23-2148995950.jpg?semt=ais_hybrid&w=740)] bg-cover bg-center'>
      <Header/>
      <Home/>
      
    </div>
  );
}

export default Container;