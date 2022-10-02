import React from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from '../context/CartContext';
import { FaTrashAlt } from "react-icons/fa"
import Form from './Form';

const Cart = () => {
  const { cartList, deleteItem, totalPrice, totalCount, deleteCart } = useCartContext();





  return (




    <>

      {cartList.length === 0 ?
        <div className='min-h-full pb-12 mx-auto mb-12 text-center'>
          <span className='block py-20 mx-auto my-4 text-4xl text-center'>Tu Carrito esta Vacio</span>
          <Link to={"/"}>
            <button className='px-4 py-2 my-12 text-white rounded-full bg-secondary-dark-bg hover:bg-pink-700'>Ir a productos</button>
          </Link>
        </div>
        :
        <div className="min-h-full p-4 mx-auto bg-orange-300 border-b lg:w-3/5 ">

          <ul className="m-4 border-b border-gray-200 divide-y divide-gray-200 ">
            {cartList.map((product) => (
              <li className="p-4 m-4 space-x-6 lg:flex sm:inline-block sm:w-full">
                <Link key={product.id} to={`/detail/${product.id}`}>
                  <img
                    className="w-40 h-40 mx-auto bg-gray-200 rounded-md "
                    src={product.image}
                    alt={`imagen ${product.title}`}></img>
                </Link>
                <div className='my-auto lg:flex'>
                  <p className="text-center lg:mx-3 ">{product.title}</p>
                  <p className="text-center lg:mx-3"> {product.count} Uni.</p>
                  <p className="text-center lg:mx-3">Precio: ${product.price}</p>
                  <p className='text-center lg:mx-3 ' > Total: ${product.count * product.price}</p>
                  <p className='text-center lg:mx-3'><button
                    onClick={() => deleteItem(product.id)}
                    className=""><FaTrashAlt className='' />
                  </button></p>
                </div>
              </li>
            ))}
          </ul>
          <span className='block mx-auto my-4 text-2xl text-center'>Cantidad total de productos: {totalCount()}</span>
          <span className='block mx-auto my-4 text-2xl text-center'>Precio a abonar: ${totalPrice()}</span>
          <div>
            <button className='block px-4 py-2 mx-auto my-12 text-white rounded-full bg-secondary-dark-bg hover:bg-pink-700' onClick={deleteCart}>Vaciar carrito</button>
          </div>
          <div>
            <Form />
          </div>
        </div>

      }
    </>

  )
}

export default Cart




