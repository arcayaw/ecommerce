import React from 'react'
import { BsCart } from "react-icons/bs"
import ItemDetail from './ItemDetail';


const CartWidget = ({ onAdd }) => {

  console.log("productos agregados", onAdd);

  return (
    <div className='flex'>
      <BsCart />
      <span className='text-m' >{onAdd}</span>
    </div>
  )
}
export default CartWidget