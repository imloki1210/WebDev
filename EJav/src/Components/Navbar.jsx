import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaShoppingCart} from "react-icons/fa"
import { Input,Button } from '@material-tailwind/react'

const Navbar = () => {
    
  return (
    <div className='flex flex-wrap  bg-blue-gray-900 px-8 py-6 '>
        <nav className='flex items-center w-full justify-between '>
            <div className='flex gap-x-10 items-center '>
                <NavLink to={"/"} className='text-teal-50 font-bold text-2xl font-sans  hover:text-teal-100'>EcomJav</NavLink>
                <NavLink to={"/"} className='text-teal-50 text-md font-sans hover:text-teal-100'>Home</NavLink>
            </div>            
            

            <div className='flex items-center gap-x-5'>
            
            {/* maybe i'll add a searchbar here in future*/}
            {/* <div>
                <Input
                    // value={searchText}
                    // onChange={(e)=>setSearchText(e.target.value)}
                    type="search"
                    color="white"
                    label="Type here..."
                /> 

                <Button size="sm"
                    // onClick={handlenotesearch}
                    color="white"
                    className="!absolute right-20 top-7 rounded text-teal-800 bg-light-green-50 shadow-none hover:bg-teal-100 transition duration-100 ease-in">Search</Button>            
            </div> */}
                <NavLink to={"/cart"} className='text-light-green-50 text-2xl hover:text-teal-100'>
                    <FaShoppingCart/>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
