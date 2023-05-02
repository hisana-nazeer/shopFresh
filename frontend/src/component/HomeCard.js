import React from 'react'

const HomeCard = ({name, image, category, price, loading}) => {
    
  return (
    <div className='bg-white shadow-md p-2 rounded'>
    <div className='bg-white shadow-md p-2 rounded-min-w-[150px]'>
    
    
        {name ? (
            <>
            <div className='h-36 w-40'>
            <img src={image} className='h-full w-full' />
            </div>
           
            </>
        )
        :(
        <div className='flex justify-center items-center h-full'>
         <p> {loading} </p>
         </div>
       
   ) }
        
    </div>
    </div>
    

  )
  }

export default HomeCard