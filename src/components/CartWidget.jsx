import React from 'react'
import { BsCart } from "react-icons/bs"
import ItemDetail from './ItemDetail';
import { Link } from 'react-router-dom';


const CartWidget = ({ onAdd }) => {

  console.log("productos agregados", onAdd);

  return (
    <div className='flex'>
      <Link to="/cart">
        <BsCart />
      </Link>
      <span className='text-m' >{onAdd}</span>
    </div>
  )
}
export default CartWidget