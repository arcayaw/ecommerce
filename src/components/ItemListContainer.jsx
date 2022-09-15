/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"
import { ItemList } from './ItemList';
import Loader from "./Loader"
import { useParams } from "react-router-dom";
import { db } from '../firebase/firebase';


const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoria } = useParams();


  useEffect(() => {
    const db = getFirestore()

    const queryCollection = collection(db, "items")
    const queryCollectionFilter = categoria ? query(queryCollection, where("category", "==", categoria)) : queryCollection

    getDocs(queryCollectionFilter)
      .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
      .catch((err) => { console.log(err) })
      .finally(() => setLoading(false))
  }, [categoria])



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
