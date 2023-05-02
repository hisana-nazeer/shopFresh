import React from 'react'
import {useSelector } from 'react-redux'

import CartProduct from '../component/cartProduct'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { loadStripe } from "@stripe/stripe-js";




const Cart = () => {
   

    

   
    const productCartItem = useSelector((state) =>state.product.cartItem)
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()
    console.log(productCartItem)

    const totalPrice = productCartItem.reduce(
        (acc,curr)=>acc+ parseInt(curr.total),0)
    const totalQty = productCartItem.reduce(
        (acc,curr)=>acc+ parseInt(curr.qty),0)

        const handlePayment = async()=>{

    
              const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
              const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}create-checkout-session`,{
                method : "POST",
                headers  : {
                  "content-type" : "application/json"
                },
                body  : JSON.stringify(productCartItem)
              })
              if(res.statusCode === 500) return;
    
              const data = await res.json()
              console.log(data)
    
              toast("Redirect to payment Gateway...!")
              stripePromise.redirectToCheckout({sessionId : data}) 
          }
         
          
         
          
        
                    
        
    
     
    
  
        
  
  
  
    return (
     <>
    <div className='p-2 md:4'>
        <h2 className='text-lg md:text-3xl font-bold text-slate-600'> Your Cart </h2>
        <div className='my-4 flex gap-3'>
            
            
       
            <div className='w-full max-w-4xl'>
                {
                    productCartItem.map((el) =>{
                        return(
                            <CartProduct
                             key={el._id}
                             id={el._id}
                             name = {el.name}
                             image = {el.image}
                             category={el.category}
                             qty={el.qty}
                             total={el.total}
                             price={el.price}

                            />
                        )
                    })
                }
            </div>
          
            <div className='w-full max-w-md ml-auto'>
            <h2 className='bg-blue-500 text-white p-2 text-lg
            '>
                
                Summary
            </h2>
            <div className='flex w-full py-2 text-lg border-b'>
            <p>Total Quantity : </p>
           <p className="ml-auto w-32 font-bold">{totalQty}</p>
            </div>

            <div className='flex w-full py-2 text-lg border-b'>
            <p>Total Amount</p>
           <p className="ml-auto w-32 font-bold" >
           <span className="text-red-500">₹</span> {totalPrice}
              </p>
            </div>
            <button className="bg-red-500 w-full text-lg font-bold py-2 text-white" 
             onClick={handlePayment}>
              Pay now
              </button>
            </div>
           </div>
           </div>
           
            
            
           
        
           </>  
    
  )
              }
            


export default Cart