import React, { } from 'react'
import { Link } from "react-router-dom"

import ItemCount from './ItemCount'


function ItemDetail({ product }) {



  const onAdd = (counter) => {
    console.log(`${counter} productos agregados al carrito`);
  }

  return (
    <>
      <div className='items-center w-3/4 py-5 mx-auto my-5 text-center bg-white rounded-md'>

        <div key={product.id} className="grid gap-4 m-12 my-5 text-center rounded-lg shadow-md md:grid-cols-6">
          <div className="md:col-span-4 bg-slate-500">

            <img className="flex items-center justify-center mx-auto " src={product.image} alt="product" style={{ width: "700px", height: '700px' }} />

          </div>
          <div className="text-white bg-slate-700 md:col-span-2">
            <h2 className='my-4 text-2xl'>{product.title}</h2>
            <h2 className='my-4 text-2xl'>$ ${product.price}</h2>
            <p className='my-4'>Descripción: {product.description}</p>
            <p className='my-4'>Contiene: {product.contiene}</p>
            <div>
              <ItemCount className='' stock={product.stock} initial={1} addItem={onAdd} />
              <Link to="/cart">
                <button className="className='p-2 px-4 py-2 mt-2 text-white rounded-full bg-secondary-dark-bg hover:bg-pink-700'">Finaliza compra </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ItemDetail
