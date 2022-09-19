
import React from 'react'


export const Item = ({ data }) => {

  const { id,
    title,
    price,
    image,
  } = data

  return (
    <div key={id} className="w-full max-w-sm mx-auto mb-5 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a >
        {/*   para el zoom in en hover scale-100 hover:scale-125 ease-in duration-500 */}
        <img className="flex items-center justify-center p-2 mx-auto mt-5 rounded-t-lg " src={image} alt="product image" style={{ width: "300px", height: '350px' }} />
      </a>
      <div className="px-5 pb-5">
        <a >
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
          <a className="text-white bg-main-dark-bg hover:bg-pink-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Ver</a>
        </div>
      </div>
    </div>
  )
}
