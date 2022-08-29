import React, { useEffect, useState } from 'react'
import getFetch from "../data/arrayProducts"
import ItemCount from './ItemCount'

const ItemDetail = ({ }) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  const onAdd = (counter) => {
    console.log(`${counter} productos agregados al carrito`);
  }

  useEffect(() => {
    getFetch
      .then(response => {
        /* el find luego lo cambiaremos por el filter segun lo pida el cliente */
        setData(response.find(prod => prod.id === 1))
        setLoading(false)
      })
  }, []);

  console.log(data);

  return (
    <>
      <div className='mt-3 text-center'>
        <h1>Item Detail Container</h1>
        {
          loading ? <h2>Cargando...</h2>
            :
            <div key={data.id} className="grid gap-4 m-12 text-center rounded-lg shadow-md md:grid-cols-6">
              <div className="md:col-span-4 bg-slate-500">
                <a href="#">
                  <img className="flex items-center justify-center mx-auto " src={data.image} alt="product image" style={{ width: "700px", height: '700px' }} />
                </a>
              </div>
              <div className="text-white bg-slate-700 md:col-span-2">
                <h2 className='my-4 text-2xl'>{data.title}</h2>
                <h2 className='my-4 text-2xl'>$ {data.price}</h2>
                <p className='my-4'>Descripción: {data.description}</p>
                <p className='my-4'>Contiene: {data.contiene}</p>
                <div>
                  <ItemCount className='' stock={6} initial={1} addItem={onAdd} />
                </div>
              </div>
            </div>
        }
      </div>
    </>
  )
}

export default ItemDetail
