import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { useState,useEffect } from 'react'
import Cart from './Pages/Cart'

const App = () => {
  const Api_Url= 'https://fakestoreapi.com/products';
    const[loading,setLoading]=useState(false);
    const[pdata,setPdata]=useState([]);

    async function fetchmyProducts(){
      setLoading(true);

      try {
          const res= await fetch(Api_Url);
          const data= await res.json();
          setPdata(data)
          
      } catch (error) {
          console.log("chutiye code thik kar");
          setPdata([]);
      }
      setLoading(false)
  }

  useEffect(()=>{
      fetchmyProducts();
  },[])

  
  return (
    <div className='flex flex-col flex-wrap bg-teal-100 min-h-screen'>

      <div className='sticky top-0 z-50 '>
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home loading={loading}pdata={pdata}/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>
      
    </div>
  )
}

export default App

