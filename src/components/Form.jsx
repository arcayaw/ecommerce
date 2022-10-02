import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
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


    addDoc(queryRef, order)
      .then(resp =>
        Swal.fire({
          title: `Gracias por tu compra, tu orden ha sido generada con el número ${resp.id}`,
          icon: "success"
        }))
      .catch(err => console.log(err))
      .finally(() => deleteCart())

  }

  return (
    <>
      <h2 className='text-center '>Formulario</h2>
      <div className='flex mx-auto'>
        <div className="flex mx-auto">
          <form onSubmit={sendOrder}>
            <input type="text" placeholder='nombre' className='flex mx-auto' />
            <input type="text" placeholder='telefono' className='flex mx-auto' />
            <input type="email" placeholder='email' className='flex mx-auto' />
            <button className='flex mx-auto my-4 text-center  text-black bg-violet-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 ' type='submit'>Enviar Orden</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form