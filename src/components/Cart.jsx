import React from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from './CartContext';
import { FaTrashAlt } from "react-icons/fa"

const Cart = () => {
  const { cartList, deleteItem } = useCartContext();

  return (
    <>
      <div className="w-3/5 px-10 mx-auto bg-orange-300 border-b border-gray-200 divide-y divide-gray-200 ">
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
              <p className="text-gray-900">Precio: ${product.price}</p>
              <p className="text-gray-900">Cantidad: {product.count}u</p>
              <button
                onClick={() => deleteItem(product.id)}
                className=""><FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>


  );
}

export default Cart