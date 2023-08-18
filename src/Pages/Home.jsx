
import React from 'react';
import  Product from "../Components/Product"
  import MySlider from "../Components/MySlider";




const Home = () => {
  return (
    <div>
      <h1 className='text-center text-warning' style={{textShadow:"2px 2px red"}}>Welcome to our E-commerce Website!</h1>
      <p className='text-center text-secondary' style={{textShadow:"2px 2px red"}}>Explore our vast collection of products.</p>
   
      <MySlider/>
   
      <Product/>
         
      
    </div>
  );
};
export default Home ;
