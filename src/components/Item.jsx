import React from 'react'
// import boxMama from "../data/images/boxMama.jpg"
// import getFetch from "../data/arrayProducts"
import ItemCount from "./ItemCount"

export const Item = ({ data }) => {

  const { id,
    title,
    stock,
    price,
    description,
    imageUrl,
    image,
    image1,
    contiene,
    imageDescription,
    category_id,
    categoryName } = data

  return (


    <div key={id} class=" w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto mb-5">
      <a href="#">
        {/*   para el zoom in en hover scale-100 hover:scale-125 ease-in duration-500 */}
        <img class=" p-2 mt-5 mx-auto rounded-t-lg  flex items-center justify-center" src={image} alt="product image" style={{ width: "300px", height: '350px' }} />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <div class="flex justify-between items-center">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
          <a href="#" class="text-white bg-main-dark-bg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Comprar</a>
        </div>
      </div>
    </div>



  )
}
