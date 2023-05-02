import React from 'react'
import HomeCard from '../component/HomeCard'
import { useSelector } from 'react-redux'
import CardFeature from '../component/CardFeature'

 function Home() {
    //to get data
    const productData = useSelector((state) => state.product.productList)
    console.log(productData)
    const homeProductCartList = productData.slice(1,4).concat(productData.slice(5,7)).concat(productData.slice(8,12))
    const homeProductCartListVegetable = productData.filter(el => el.category ==='vegetable', [])
    console.log(homeProductCartListVegetable)
    
    const loadingArray =  new Array(20).fill(null)


    return (
        <div className='p-2 md:p-4'>
            <div className='md:flex gap-4 py-2'>
            <div className="md:w-1/2 py-4">
            <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Home Delivery</p>
                
            <img src="https://th.bing.com/th/id/OIP.rY0zg4YyXkBpqgPlw3oBuAHaHa?w=225&h=220&c=7&r=0&o=5&dpr=2&pid=1.7" className='h-10'></img>
            </div>  
            <h2 className='text-4xl md:text-6xl font-bold py-3'>Experience seamless, speedy delivery   <span className='text-red-500 text-5xl'> to Your Home</span> </h2>    
                <p className='py-3 text-base '>Welcome to our online supermarket! Here, you'll find everything you need to make your life easier and more convenient. From fresh produce to household essentials, we've got it all at competitive prices.
                
We take pride in offering a wide variety of products that cater to your every need. Our inventory is constantly updated with the latest and greatest items, ensuring that you have access to the best products available.




</p>
<button className='font-bold bg-red-500 text-slate-200 px-3 py-1 rounded-md'>Shop now!</button >
                </div>
               
        
                <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-items-center'>
                
                {homeProductCartList[0]?
                  homeProductCartList.map((el) => {
                            return(
                                <HomeCard
                                key={el._id}
                                image={el.image}
                                name = {el.name}
                                price={el.price}
                                category ={el.category}
                                />
                                

                            )
                        })
                          
                    //else:
                     
                    :loadingArray.map((el, index)=>{
                       return
                           <HomeCard
                             key={index+"loading.."}
                             loading={"Loading....."}
                       />
                        
                     })}
 
                          
                    
                    </div>
                    </div>
                    
                    
               
               
              
                <div className=''>
                    <h2 className='font-bold text-2xl text-slate-800'>Fresh Vegetables</h2>
                    <div  className='flex gap-5'>
                        {
                            homeProductCartListVegetable.map ((el) =>{
                                return (
                                    <CardFeature
                                        key ={el._id}
                                        id={el._id}
                                        name={el.name}
                                        category={el.category}
                                        price={el.price}
                                        image={el.image}
                                            
                                    
                                    />
                                )
                                }
                            )
                                            
                            }  
                            </div>
                                  
                                    </div> 
                 

        <div className='my-5'>
                    <h2 className='font-bold text-2xl text-slate-800 mb-4'>Your Product</h2>
                    <div className=''></div>

                   
                    </div>
                    </div>
              
                       
                          
                            
                               );
                        };
                    
                   
           
           
           
            
   
export default Home