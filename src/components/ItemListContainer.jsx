import React from 'react'
import CartWidget from './CartWidget';
import ItemCount from "./ItemCount"

const ItemListContainer = () => {

  const onAdd = (counter) => {
    console.log(`${counter} productos agregados al carrito`);
  }

  return (
    <div>
      <p className='mt-3 text-center'>Este es el Item List Container</p>
      <ItemCount stock={6} initial={1} addItem={onAdd} />
    </div>
  )
}

export default ItemListContainer