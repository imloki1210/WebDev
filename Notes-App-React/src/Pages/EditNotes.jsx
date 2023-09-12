import React from 'react'
import { NavLink , useNavigate, useParams} from "react-router-dom"
import {IoIosArrowBack} from "react-icons/io"
import {RiDeleteBin6Line} from "react-icons/ri"
import {
  Button,
  Navbar,
} from "@material-tailwind/react";
import { useState } from 'react';
import { toast } from 'react-hot-toast';


const EditNotes = ({notes,setNotes}) => {

  const {id}= useParams();
  const note= notes.find((n)=>n.id== id);
  const[title,setTitle]=useState(note.title)
  const[details,setDetails]=useState(note.details)
  const navigate= useNavigate();

  const handleEdit=(e)=>{
    e.preventDefault();

    if (title && details) {
      const nNote= {...note,title,details}
      // if id of current note and note opened from notes are equal then item will be = newNote....
      const nNotes= notes.map(item=>{
        if (item.id==id) {         
          item=nNote;
        }
        return item;
      })
      setNotes(nNotes);
    }
    navigate('/');
    toast.success("Note Saved")
  }

  const handleDelete=()=>{
    // we are filtering out the item(note) on the basis of id and storing remaining notes in nNotes.
    const nNotes= notes.filter(item=>item.id!=id)
    setNotes(nNotes);
    navigate('/')
    toast.error("Note Deleted...")

  }

  return (
    <div className="bg-black min-h-screen flex py-3 flex-col items-center ">

      <header>
      <Navbar className="w-[400px] flex bg-gray-900 border-none items-center justify-between mb-9">
        <NavLink to={"/"}>
          <IoIosArrowBack size='2.4rem' className="text-white  "/>
        </NavLink>
        <div className="flex gap-x-2">
            <Button className="bg-orange-700 text-md hover:bg-orange-400" onClick={handleEdit}>Save</Button>
            <button className="bg-red-700 text-2xl p-3 rounded-lg hover:bg-red-400"><RiDeleteBin6Line onClick={handleDelete}/></button>
        </div>
      </Navbar>    
      </header>

      <form className="flex flex-col gap-y-5" onSubmit={handleEdit}>
        <input type="text" placeholder="Title" className=" font-Sans p-4 border-none rounded-md text-2xl w-[1000px] bg-gray-900 placeholder:font-bold focus:outline-none text-white" value={title} onChange={(e)=>setTitle(e.target.value)}/>

        <textarea rows="13" placeholder="Start typing..." className=" font-Sans p-4 border-none rounded-md text-2xl w-[1000px] bg-gray-900 placeholder:text-md focus:outline-none text-white" value={details} onChange={(e)=>setDetails(e.target.value)}></textarea>
        
      </form>
      
    </div>
  )
}

export default EditNotes
