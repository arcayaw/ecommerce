/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import getFetch from "../data/arrayProducts"
import ItemDetail from './ItemDetail'
import Loader from "./Loader"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {


  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    getFetch.then(product => {
      const newItemDetail = product.find(product => product.id === parseInt(itemId));
      setProduct(newItemDetail)
      setLoading(false);
    })
  }, [itemId]);

  return (
    <div>
      {
        loading ? <Loader />
          :
          (<ItemDetail className="justify-between " product={product} />)
      }
    </div>
  )
}

export default ItemDetailContainer