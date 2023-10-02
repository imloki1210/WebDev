import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../Components/CartItem'
import { Button } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'

const Cart = () => {
    const {cart}= useSelector((state)=>state)
    const [totalAmount,setTotalAmount]=useState(0)

    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
    },[cart])

  return (
    <div className='m-8 flex flex-col justify-center'>
        {
            cart.length>0 && <h1 className='text-3xl font-bold text-center mb-5 text-teal-800'>Your Cart</h1>
        }
        
        {
            cart.length>0?
            (
                <div className='flex gap-x-8 justify-center'>
                    <div className='flex flex-col gap-y-3'>
                        {
                            cart.map((item)=>(
                                <CartItem key={item.id} item={item}/>
                            ))
                        }
                    </div>

                    <div className='flex flex-col gap-y-3 w-[400px] h-full rounded-lg bg-gray-50 p-4 px-5 shadow-md '>
                        <div className='gap-y-2 flex flex-col'>
                            <div className=' py-2 text-2xl font-bold text-gray-900 text-center border-b-2 border-black'>
                                <p>Summary</p>
                            </div>
                            <div className='font-bold'>
                                <p>
                                    Total Items: <span className='text-gray-800'>{cart.length}</span>
                                </p>
                                <p>Total Amount: <span className=' text-red-800'>${totalAmount}</span></p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Button className='text-teal-50 w-[300px] bg-teal-800 shadow-none hover:bg-teal-600 transition duration-100 ease-in '>Checkout</Button>
                        </div>
                        
                    </div>
                </div>
            ):
            (
                <div className='flex flex-col items-center mt-60'>
                    <div className='py-2 text-2xl font-bold text-gray-900'>Cart Empty</div>
                    <NavLink to='/'>
                        <Button className=' text-teal-50 bg-teal-800 text-md shadow-none hover:bg-teal-600 transition duration-100 ease-in hover:shadow-none focus:shadow-none active:scale-100'>Home</Button>
                    </NavLink>
                </div>
            )
        }
      
    </div>
  )
}

export default Cart
