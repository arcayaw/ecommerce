/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import getFetch from "../data/arrayProducts"
import { ItemList } from './ItemList';
import Loader from "./Loader"
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState()
  //REVISAR EL ESTADO INICIAL DE LOADING, LO DEJO EN BLANCO PORQUE ME CUELGA EL RENDER DEL HOME
  const { categoria } = useParams();


  useEffect(() => {
    getFetch.then(products => {
      if (!categoria) {
        setProducts(products)
      } else {
        const nuevaLista = products.filter(product => product.category === categoria);
        setProducts(nuevaLista)
        setLoading(false)
      }
    })
  }, [categoria, setLoading])


  return (
    <div>
      {
        loading ? <Loader />
          :
          (<ItemList className="justify-between " products={products} />)
      }
    </div>
  )
}

export default ItemListContainer


