import React from 'react'

export default function ProductCard(props) {
  return (
    <div  className=' center h-full   ml-20 p-10 pt-[5%] flex flex-wrap   '>
        <div className='mr-3 mb-3 p-3 card border shadow rounded w-[18%] h-[35vh] flex flex-col justify-center items-center'>
            <div className='mb-3 w-full h-[80%] bg-contain bg-center bg-no-repeat' style={{
                backgroundImage : "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}></div>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <h1>Lorem ipsum </h1>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam iste molestias, sed fugiat perferendis!</h1>
            <h1>Rs 123</h1>

        </div>
    </div>
  )
}
