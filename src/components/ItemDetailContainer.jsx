/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import Loader from "./Loader"
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = () => {


  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  // useEffect(() => {
  //   getFetch.then(product => {
  //     const newItemDetail = product.find(product => product.id === parseInt(itemId));
  //     setProduct(newItemDetail)
  //     setLoading(false);
  //   })
  // }, [itemId]);

  useEffect(() => {
    const db = getFirestore()
    const dbQuery = doc(db, "items", itemId)
    getDoc(dbQuery)
      .then(resp => setProduct({ id: resp.id, ...resp.data() }))
      .catch((err) => { console.log(err) })
      .finally(() => setLoading(false))
  }, [itemId])

  // console.log('item', product);

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