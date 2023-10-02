import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';
import CButton from '../Components/CButton';
import { Button } from '@material-tailwind/react'


const Home = ({pdata,loading}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const filteredCategory= selectedCategory? pdata.filter(p=>p.category == selectedCategory):(pdata)

    // const [searchText, setSearchText] = useState('');
    // const [searchResults, setSearchResults] = useState(pdata);

    // const handlenotesearch=()=>{
    //     const search=searchText.toLocaleLowerCase();

    //     setSearchResults(pdata.filter((item)=>{
    //         const searchTitle= item.title.toLocaleLowerCase()
    //         const searchCategory= item.category.toLocaleLowerCase()

    //         return searchTitle.includes(search) || searchCategory.includes(search)
    //     }))
    // }
    

  return (      
    <div className='flex flex-col items-center justify-center mt-8'>

      <div className='flex flex-wrap gap-x-5 gap-y-5 items-center p-5 justify-center'>

      
        <Button className='rounded text-teal-800 bg-light-green-50 shadow-none hover:bg-teal-200 transition duration-100 ease-in' onClick={()=>setSelectedCategory('')}
        >All</Button>
     

        {
          ['men\'s clothing', 'jewelery', 'electronics', 'women\'s clothing'].map(category => (
              <CButton key={category} category={category} setSelectedCategory={setSelectedCategory}/>
          ))
        }
      </div>

      <div >
          {
            loading?(<Spinner/>):
            (
              <div className='flex flex-wrap gap-x-5 gap-y-5 items-center p-5 justify-center'>
                {filteredCategory.map(item => (
                  <Product key={item.id} item={item} />
                ))}
              </div>              
            )
          }
      </div>

    </div>
  )
}

export default Home
