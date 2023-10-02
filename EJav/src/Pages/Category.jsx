import React from 'react'
import Product from '../Components/Product';
import { useState } from 'react';
import CButton from '../Components/CButton';
import Spinner from '../Components/Spinner';
import Home from './Home';

const Category = ({pdata,loading}) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredCategory= selectedCategory? pdata.filter(p=>p.category == selectedCategory):(pdata)

  return (
    <div className='flex flex-col items-center justify-center mt-8'>

      <div className='flex flex-wrap gap-x-5 gap-y-5 items-center p-5 justify-center'>
        {['men\'s clothing', 'jewelery', 'electronics', 'women\'s clothing'].map(category => (
            <CButton key={category} category={category} setSelectedCategory={setSelectedCategory}/>
        ))}
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

export default Category
