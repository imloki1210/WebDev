import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { useDispatch, useSelector } from "react-redux";
  import { remove } from '../Redux/Slices/CartSlice';
  import {AiFillDelete} from 'react-icons/ai'
  import { toast } from 'react-hot-toast';


const CartItem = ({item}) => {
    const {cart}= useSelector((state)=>state)
    const dispatch= useDispatch();



    const removeItemHandler=()=>{
        dispatch(remove(item.id))
        toast.error("Item removed from cart")

      }

  return (
    <div className="rounded-md flex w-[472px] bg-gray-50 hover:scale-105 transition duration-300 ease-in hover:shadow-none ">
        
        <div>
            <CardHeader shadow={false} floated={false} className="overflow-hidden h-[200px] w-[200px] mb-3">
                <img
                    src={item.image}
                    className="h-full w-full object-cover"
                />
            </CardHeader>
        </div>

        <div className='flex flex-col'>
            <CardBody className=''>
                <div className="mb-2 flex flex-col ">
                    <Typography color="blue-gray" className="text-md font-bold mb-2">
                        {item.title.substring(0,27)+"..."}
                    </Typography>

                    <Typography color="blue-gray" className="font-medium ">
                        {item.description.substring(0,30) + "..."}
                    </Typography>

                </div>
            </CardBody>

            <CardFooter className="pt-0 flex justify-between items-center">
                    <Typography color="blue-gray" className="font-md font-bold text-teal-900 font-sans">
                        <span>$</span>{item.price}
                    </Typography>
                    <AiFillDelete className='text-red-400 text-xl transition duration-100 ease-in  hover:text-red-900 hover:cursor-pointer' onClick={removeItemHandler}/>
            </CardFooter>
        </div>
        
      </div>
  )
}

export default CartItem
