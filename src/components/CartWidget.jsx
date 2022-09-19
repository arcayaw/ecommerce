import React from 'react'
import { BsCart } from "react-icons/bs"
import ItemDetail from './ItemDetail';
import { Link } from 'react-router-dom';
import { useCartContext } from "../context/CartContext"


const CartWidget = () => {

  const { totalCount, cartList } = useCartContext()

  // console.log("productos agregados", totalCount());

  return (
    <>
      {cartList.length === 0 ?
        <Link to="/cart">
          <BsCart />
        </Link>
        :
        <div className='flex'>
          <Link to="/cart">
            <BsCart />
          </Link>
          <span className='text-2xl align-middle '>{totalCount()}</span>
        </div>}

    </>


  )
}
export default CartWidget




/* 
<div className='flex'>
      <Link to="/cart">
        <BsCart />
      </Link>
      <span className='text-m' >{ }</span>
    </div>


*/

