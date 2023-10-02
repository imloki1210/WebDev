import React from 'react'
import { Button } from '@material-tailwind/react'

const CButton = ({category,setSelectedCategory}) => {
  return (
    <div>
      <Button onClick={() => setSelectedCategory(category)}
        className='rounded text-teal-800 bg-light-green-50 shadow-none hover:bg-teal-200 transition duration-100 ease-in'>
              {category}
      </Button>
    </div>
  )
}

export default CButton
