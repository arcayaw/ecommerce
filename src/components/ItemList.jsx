import React, { useState, useEffect } from 'react'
import getFetch from "../data/arrayProducts"
import { Item } from './Item'


export const ItemList = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  // const getProducts = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(getFetch)
  //     }, 2000);
  //   })
  // }

  // useEffect(() => {
  //   const asyncFunction = async () => {
  //     try {
  //       const productsList = await getProducts()
  //       setProducts(productsList)
  //       console.log("productos", productsList);
  //     } catch (error) {
  //       console.log("hubo un error");
  //     }
  //   }
  //   asyncFunction();
  // }, []);

  /* la promise viene de data/arrayProducts */


  useEffect(() => {
    getFetch.then(data => {
      setData(data)
      setLoading(false)
    })
  }, [])

  return (
    <>
      <h1 className='mt-3 text-center'>List Container</h1>
      {
        loading ? <h2 className='mt-3 text-2xl text-center'>cargando</h2>
          :
          <div className='grid grid-cols-1 gap-5 p-10 text-center sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
            {data.map((data) => {
              return (
                <Item key={data.id} data={data} />
              )
            })}
          </div>
      }
    </>
  )
}


// <div className='grid grid-cols-1 gap-5 p-10 text-center sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
//   {data.map((data) => {
//     return (
//       <Item product={data} />
//     )
//   })}
// </div>