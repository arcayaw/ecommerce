import React, { useState, useEffect } from 'react'
import arrayProducts from "../data/arrayProducts"
import { Item } from './Item'


export const ItemList = () => {

  const [products, setProducts] = useState([])

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(arrayProducts)
      }, 2000);
    })
  }

  useEffect(() => {
    const asyncFunction = async () => {
      try {
        const productsList = await getProducts()
        setProducts(productsList)
        console.log("productos", productsList);
      } catch (error) {
        console.log("hubo un error");
      }
    }
    asyncFunction();
  }, []);

  return (
    <div className='grid grid-cols-1 gap-5 p-10 text-center sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
      {products.map((product) => {
        return (
          <Item product={product} />
        )
      })}
    </div>
  )
}
