import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import {IoIosArrowBack} from "react-icons/io"
import {
  Button,
  Navbar,
} from "@material-tailwind/react";
import {v4 as uuid} from "uuid";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const NewNote = ({setNotes}) => {

  const[title,setTitle]=useState('')
  const[details,setDetails]=useState('')
  const navigate = useNavigate();

  const saveNote=(e)=>{
    e.preventDefault();

    if (title && details) {
      // we have installed and used uuid here for assigning unique ids to each note....
      const note={id: uuid(),title,details}
      setNotes(prev=>[note, ...prev])
      navigate('/')
      toast.success("Note Created...")
    }
  }

  return (
    <div className="bg-black min-h-screen flex py-3 flex-col items-center ">
      
      <header>
      <Navbar className="min-w-[400px] flex bg-gray-900 border-none items-center justify-between mb-9">
        <NavLink to={"/"}>
          <IoIosArrowBack size='2.4rem' className="text-white  "/>
        </NavLink>
        <Button className="bg-orange-700 text-md" onClick={saveNote}>Save</Button>
      </Navbar>    
      </header>

      <form className="flex flex-col gap-y-5" onSubmit={saveNote}>
        <input type="text" placeholder="Title" className=" font-Sans p-4 border-none rounded-md text-2xl w-[1000px] bg-gray-900 placeholder:font-bold focus:outline-none text-white" value={title} onChange={(e)=>setTitle(e.target.value)}/>

        <textarea rows="13" placeholder="Start typing..." className=" font-Sans p-4 border-none rounded-md text-2xl w-[1000px] bg-gray-900 placeholder:text-md focus:outline-none text-white" value={details} onChange={(e)=>setDetails(e.target.value)}></textarea>
        
      </form>
      
    </div>
  )
}

export default NewNote


