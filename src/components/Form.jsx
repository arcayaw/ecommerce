import React, { useState } from 'react'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import Swal from 'sweetalert2'
import { db } from '../firebase/firebase';
import { useCartContext } from '../context/CartContext';



function Form() {
  const { totalPrice, cartList, deleteCart } = useCartContext()


  const [idOrder, setIdOrder] = useState("");

  const sendOrder = (e) => {
    e.preventDefault();
    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value
      },
      items: cartList,
      total: totalPrice()
    }

    const queryRef = collection(db, "orders");
    //agregamos el documento
    addDoc(queryRef, order).then(respuesta => setIdOrder(respuesta.id))


  }

  console.log(`Tu numero de ordern es ${idOrder}`);

  return (
    <div className=''>
      <h2 className='text-center'>Formulario</h2>
      <div className="flex">
        <form onSubmit={sendOrder}>
          <input type="text" placeholder='nombre' />
          <input type="text" placeholder='telefono' />
          <input type="email" placeholder='email' />
          <button className='flex text-center' type='submit'>enviar orden</button>
        </form>
      </div>
    </div>
  )
}

export default Form