import React from 'react-icons'
import {TbPlus,TbMinus} from "react-icons/tb"
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { deleteCartItem, increaseQty, decreaseQty } from '../redux/productSlice';



const CartProduct = ({id, name, image, category, qty, total, price}) => {
   const dispatch = useDispatch ()
 
  
    return (
    <div className='bg-slate-200 p-2 flex gap-4 rounded border-2 border-slate-300'>
        <div className='bg-white p-3 rounded overflow-hidden'>
            <img src = {image} className='h-28 w-40 object-cover p-3'/>
        </div>
        <div className="flex flex-col gap-1 w-full ">
        <div className="flex justify-between">
          <h3 className="font-semibold text-slate-600  capitalize text-lg md:text-xl p-3">
            {name}
          </h3>
          <div className="cursor-pointer text-slate-700 hover:text-red-500 " onClick={()=>dispatch(deleteCartItem(id))}>
            <AiFillDelete />
          </div>
         
        

        <p className=" font-bold md:text-2xl p-3 py-1">
          <span className="text-red-500  ">₹</span>
          <span>{price}</span>
        </p>

        <div className='flex justify-between bg-slate-200 rounded'>
            <div className='flex gap-3 items-center '>


            </div>
           

        
        
        
          <div className="flex gap-3 m-2">
            <button onClick={() => dispatch(increaseQty(id))} className="bg-slate-100 py-1 mt-2 rounded hover:bg-slate-400 p-1 min-w-[100px]" ><TbPlus/></button>
              
            <p className="font-semibold p-1">{qty}</p>
            <button onClick={() => dispatch(decreaseQty(id))} className="bg-slate-100 py-1 mt-2 rounded hover:bg-slate-400 min-w-[100px]" ><TbMinus/></button>
            
            <div className='flex items-center gap-2 font-bold'>
                <p>Total  :</p>
                <p>{total}</p>
            </div>
              
          </div>
          </div>


        </div>


    </div>
    </div>
    
  )
}


export default CartProduct