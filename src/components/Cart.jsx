import React from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from './CartContext';
import { FaTrashAlt } from "react-icons/fa"

const Cart = () => {
  const { cartList, deleteItem, totalPrice, totalCount, deleteCart } = useCartContext();

  return (



    <>

      {cartList.length === 0 ?

        <div className='min-h-full pb-12 mx-auto mb-12 text-center'>
          <span className='block mx-auto my-4 text-2xl text-center '>Tu Carrito esta Vacio</span>
          <Link to={"/"}>
            <button className='px-4 py-2 my-12 text-white rounded-full bg-secondary-dark-bg hover:bg-pink-700'>Ir a productos</button>
          </Link>
        </div>


        :

        <div className="w-3/5 min-h-full px-10 mx-auto mb-8 bg-orange-300 border-b">
          <div className=''>
            <p className='inline-block px-10 py-6 mx-10 mx-auto space-x-6 align-middle '>Precio</p>
            <p className='inline-block px-10 py-6 mx-10 mx-auto space-x-6 align-middle '>Total</p>
          </div>
          <ul className="inline-block align-middle border-b border-gray-200 divide-y divide-gray-200">
            {cartList.map((product) => (
              <li className="inline-block px-10 py-6 mx-10 mx-auto space-x-6 align-middle lg:flex ">
                <Link to={`/detail/${product.id}`}>
                  <img
                    className="flex-none object-cover object-center w-40 h-40 bg-gray-200 rounded-md sm:mb-3"
                    src={product.image}
                    alt={`imagen ${product.title}`}></img>
                </Link>
                <p className="text-gray-900 ">{product.title}</p>
                <p className="text-gray-900"> {product.count}Unidades</p>
                <p className="text-gray-900">Precio: ${product.price}</p>
                <p> Total: ${product.count * product.price}</p>
                <button
                  onClick={() => deleteItem(product.id)}
                  className=""><FaTrashAlt />
                </button>
              </li>
            ))}
          </ul>
          <span className='block mx-auto my-4 text-2xl text-center'>Cantidad total de productos: {totalCount()}</span>
          <span className='block mx-auto my-4 text-2xl text-center'>Precio a abonar: ${totalPrice()}</span>
          <div>
            <button className='block px-4 py-2 mx-auto my-12 text-white rounded-full bg-secondary-dark-bg hover:bg-pink-700' onClick={deleteCart}>Vaciar carrito</button>
          </div>
        </div>


      }

    </>

  )
}

export default Cart




