import {
    Navbar,
    Typography,
    Button,
    Input,
  } from "@material-tailwind/react";
import{MdAddCircle} from "react-icons/md"
import { NavLink } from "react-router-dom";
   
  const NavBar=({searchtext, setSearchtext,handlenotesearch})=>{
    return (
      <Navbar
        // variant="gradient"
        color="blue-gray"
        className="mx-auto max-w-screen-xl bg-gray-900 px-4 py-3"
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
          <Typography
            as="a"
            href="/"
            variant="h4"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-mono"
          >
            My Notes
          </Typography>

          

          <div className="relative flex w-full gap-5 md:w-max">
          <NavLink to={'/new'}> 
            <MdAddCircle size='2rem'  className="mt-1 text-gray-600 hover:text-white transition duration-100 ease-in"/>
          </NavLink>
            <Input
            value={searchtext}
            onChange={(e)=>setSearchtext(e.target.value)}
              type="search"
              color="white"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
              onClick={handlenotesearch}
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
        </div>
      </Navbar>
    );
  }
  export default NavBar