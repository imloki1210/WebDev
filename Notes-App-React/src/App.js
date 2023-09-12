import React, { useEffect, useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Notes from './Pages/Notes'
import NewNote from './Pages/NewNote'
import EditNotes from './Pages/EditNotes'


const App = () => {

  // this retrives the values of state from 'notes' by using sessionstorage.getitem and then parse it into json format
  // "||"" works as or...if there is any value in notes it will be converted into json or it will show empty array
  const[notes,setNotes]=useState(JSON.parse(sessionStorage.getItem('notes')) || [])

  useEffect(()=>{
    // everytime any value changes in 'notes' below code will store the changes into sessionstorage in json format
    sessionStorage.setItem('notes',JSON.stringify(notes))
    
  },[notes])

  return (
    <Routes>
      <Route path='/' element={<Notes notes={notes}/>}/>
      <Route path='/new' element={<NewNote setNotes={setNotes}/>}/>
      <Route path='/edit/:id' element={<EditNotes notes={notes} setNotes={setNotes}/>}/>
    </Routes>
  )
}

export default App

