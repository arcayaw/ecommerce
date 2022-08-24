import React from 'react'
import boxMama from "../data/images/boxMama.jpg"
import arrayProducts from "../data/arrayProducts"

export const Item = ({ product }) => {
  return (
    // <div>
    //   <div className='flex items-center justify-center'>
    //     <img src={product.image1} className="mt-5" alt="" style={{ width: "300px", height: '400px' }} />
    //     <p>{product.title}</p>
    //   </div>
    // </div>

    <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto mb-5">
      <a href="#">
        <img class="p-2 mt-5 mx-auto rounded-t-lg  flex items-center justify-center" src={product.image1} alt="product image" style={{ width: "300px", height: '350px' }} />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
        </a>
        <div class="flex justify-between items-center">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
          <a href="#" class="text-white bg-main-dark-bg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Comprar</a>
        </div>
      </div>
    </div>

  )
}
