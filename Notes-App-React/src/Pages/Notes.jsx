import React, { useEffect, useState } from 'react'
import Note from '../Components/Note'
import NavBar from '../Components/Navbar'



const Notes = ({notes}) => {
  const[searchtext,setSearchtext]=useState('')
  const[searchresults,setSearchresults]=useState(notes)

  const handlenotesearch=()=>{
    // here we filter the notes whose title matches the input text
    setSearchresults(notes.filter(
      note=>{
        if (note.title.toLowerCase().match(searchtext.toLocaleLowerCase())) {
          return note;
        }
      }
    ))

  }

  // another way to filter by using "includes" instead of match
  // here titlesearch is title of notes and search is text in input if input includes matching text it will be shown
  
  // const handlenotesearch=()=>{
  //   const search = searchtext.toLocaleLowerCase();

  //   setSearchresults(
  //     notes.filter((note)=>{
  //       const titlesearch = note.title.toLocaleLowerCase();
  //       return titlesearch.includes(search)
  //     })
  //   )

  // }

  // if you want to search notes on the basis of either title or details use below code 
  // const handlenotesearch=()=>{
  //   const search = searchtext.toLowerCase();

  //   setSearchresults(
  //     notes.filter((note) => {
  //       const searchtitle = note.title.toLowerCase();
  //       const searchdetails = note.details.toLowerCase();
  
  //       // Check if either the title or category includes the search text
  //       return searchtitle.includes(search) || searchdetails.includes(search);
  //     })
  //   )

  // }
  useEffect(handlenotesearch,[searchtext])
  return (
    
    <div className='py-3 px-3 min-h-screen bg-black '>
      <header>
        <NavBar searchtext={searchtext} setSearchtext={setSearchtext} handlenotesearch={handlenotesearch}/>
      </header>

      {/* condition to show "no notes found" if notes is empty */}
      {
        notes.length>0?
        (<div className='flex flex-wrap justify-center align-middle text-white gap-x-7'>
        {
          searchresults.map((note)=>(
            <Note key={note.id} note={note}/>
          ))
        }
      </div>):
      
        (<div className='flex flex-wrap justify-center align-middle mt-60 text-gray-600 gap-x-7 font-sans'>
          <p>No notes found....</p>
        </div>)
      }

      
    </div>
  )
}

export default Notes


