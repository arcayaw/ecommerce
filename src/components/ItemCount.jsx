import React from 'react'
import { useState } from 'react'
import boxMama from "../data/images/boxMama.jpg"
import Swal from 'sweetalert2'
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"





export default function ItemCount({ stock, initial, addItem }) {
  //el stock viene dado desde ItemListContainer.js donde uso esta funcion ItemCount

  const [counter, setCounter] = useState(initial)

  const suma = () => {
    if (counter >= stock) {
      Swal.fire({
        title: 'Atención!',
        text: `Solo nos quedan ${stock} unidades de este articulo.`,
        icon: 'info',
        confirmButtonText: 'Volver'
      })
    } else {
      setCounter(counter + 1)
    }
  }
  const resta = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    } else {
      counter = setCounter
    }
  }
  return (

    <div className='text-center '>
      <div className='flex items-center justify-center'>
        <img src={boxMama} className="mt-5" alt="" style={{ width: "300px", height: '400px' }} />
      </div>
      <div>
        <p className='mt-5'>Cantidad</p>
      </div>
      <div className='flex items-center justify-center text-xl ' >
        <button className='mx-3 text-secondaryColor' onClick={suma}><AiFillPlusCircle /></button>
        <p className=''>{counter} </p>
        <button className='mx-3 text-secondaryColor' onClick={resta}><AiFillMinusCircle /></button>
      </div>
      <div>
        <button className='p-2 px-4 py-2 mt-2 text-white rounded-full bg-secondary-dark-bg hover:bg-blue-700' onClick={() => (addItem(counter))}>Agregar al carrito</button>
      </div>

    </div>
  )
}

