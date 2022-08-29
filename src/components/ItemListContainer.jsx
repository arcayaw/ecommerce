import React from 'react'
import CartWidget from './CartWidget';
import ItemCount from "./ItemCount"
import { ItemList } from './ItemList';

const ItemListContainer = () => {

  // const onAdd = (counter) => {
  //   console.log(`${counter} productos agregados al carrito`);
  // }

  return (
    <div className=''>
      <ItemList className="justify-between " />
      {/* <ItemCount stock={6} initial={1} addItem={onAdd} /> */}
    </div>
  )
}

export default ItemListContainer


