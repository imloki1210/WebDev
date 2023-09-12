import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

   
  const Note=({note})=> {
    return (
      <NavLink to={`/edit/${note.id}`}>
        <Card className="mt-6 min-w-[500px] bg-gray-900 hover:scale-105 transition duration-300 ease-in gap-2 rounded-xl">
          <CardBody>
            <Typography className="mb-5 text-gray-400 ">
            {note.title.split(" ").slice(0,5).join(" ") + "..."}
            </Typography>
            <Typography className=" text-gray-600 text-xs">
            {note.details.split(" ").slice(0,10).join(" ") + "....."}
            </Typography>
            {/* <Typography variant="h5" className="text-white">
              {note.date}
            </Typography> */}
          </CardBody>
        </Card>
      </NavLink>
    );
  }
  export default Note


  