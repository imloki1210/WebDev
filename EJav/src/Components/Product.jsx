import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
   
  const Product=({item})=> {
    const {cart}= useSelector((state)=>state)
    const dispatch= useDispatch();

    const addToCartHandler=()=>{
      dispatch(add(item))
      toast.success("Item added to cart")
    }

    const removeItemHandler=()=>{
      dispatch(remove(item.id))
      toast.error("Item removed from cart")
    }

    return (      
      <Card className=" h-[400px] w-72 bg-gray-50 hover:scale-105 transition duration-300 ease-in hover:shadow-none ">
        
        <CardHeader shadow={false} floated={false} className="overflow-hidden h-[500px]">
          <img
            src={item.image}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {item.title.substring(0,20)+"..."}
            </Typography>
            <Typography color="blue-gray" className="font-md font-bold text-teal-900 font-sans">
              <span>$</span>{item.price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {item.description.substring(0,30) + "..."}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          {
            cart.some((i)=>i.id==item.id)?
            (
              <Button
                ripple={false}
                fullWidth={true}
                className=" text-red-50 bg-red-800 shadow-none hover:bg-red-600 transition duration-100 ease-in hover:shadow-none focus:scale-102 focus:shadow-none active:scale-100"
                onClick={removeItemHandler}>
                Remove Item
              </Button>
            ):
            (
              <Button
                ripple={false}
                fullWidth={true}
                className=" text-teal-50 bg-teal-800 shadow-none hover:bg-teal-600 transition duration-100 ease-in hover:shadow-none focus:scale-102 focus:shadow-none active:scale-100"
                onClick={addToCartHandler}>
                Add to Cart
              </Button>
            )
          }
        </CardFooter>
      </Card>
    );
  }
  export default Product;