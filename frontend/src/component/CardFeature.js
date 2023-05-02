import React from 'react'

import { useDispatch } from 'react-redux'
import { addCartItem,increaseQty } from '../redux/productSlice'

const CardFeature = ({image,name,price,id, category}) => {
const dispatch = useDispatch()

 
  const handleAddCartProduct = (e) =>
  {
    dispatch(addCartItem({
      _id:id,
      name:name,
      price:price,
      category:category,
      image:image
      
    }  ))
   
  }

  
  
  
  
  return (
    <div className='w-full min-w-[150px] bg-white hover:shadow-lg drop-shadow-lg pt-5 px-4 cursor pointer flex flex-col '>
<div className='h-28 flex flex-coljustify-center items-center'>
    <img src= {image} className='h-full' />
</div>
<h3 className='font-semibod text-slate-600 text-center capitalize text-lg'>{name}</h3>
           <p className='text-center font-bold'><span className='text-green-500'>₹</span>
          <span> {price}</span>
           </p>
           <button className='bg-yellow-500 py-0.5 px-2 flex items-center justify-center hover:bg-yellow-600 w-full rounded ' onClick={handleAddCartProduct}  >Add to Cart</button>

    </div>
  )
}

export default CardFeature