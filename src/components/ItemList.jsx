import React from 'react'
import { Item } from './Item'
import { Link } from 'react-router-dom';



export const ItemList = ({ products }) => {
  return (


    <div className='grid grid-cols-1 gap-5 p-10 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        products.map((product) => (

          <Link key={product.id} to={`/id/${product.id}`} >
            <Item className="justify-between" data={product} />
          </Link>
        ))
      }

    </div>

  )
}
