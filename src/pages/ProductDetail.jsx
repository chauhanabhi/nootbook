import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Rating } from '../components';
import {useTitle} from "../hooks/useTitle"
import { useCart } from '../context';

export const ProductDetail = () => {
    const [data, setData] = useState({});
    const {id} = useParams();
    const {addToCart, cartList} = useCart();
    const [isInCart, setIsInCart] = useState(false);



    useTitle(data.name)

   useEffect(() => {
  async function fetchData() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`)
    const json = await response.json()
    setData(json)
  }
  fetchData()
  // check is in carttt
  const productIsInCart = cartList.find(item => item.id === data.id);
  setIsInCart(!!productIsInCart);
}, [id, cartList])

  return (

    <main>
        <section>
          <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{data.name}</h1>
          <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{data.overview}</p>
          <div className="flex flex-wrap justify-around">
            <div className="max-w-xl my-3">
              <img className="rounded" src={data.image_local} alt={data.name} />
            </div>
            <div className="max-w-xl my-3">
              <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                <span className="mr-1">$</span>
                <span className="">{data.price}</span>
              </p>
                <div className="flex items-center my-2">
                  <Rating key={data.id} rating={data.rating} />
                </div>
              <p className="my-4 select-none">
                {data.best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>}   
                {data.in_stock && <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>}
                {!data.in_stock && <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>}
                <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{data.size} MB</span>
              </p>
              <p className="my-3">
                {!isInCart && <button onClick={() => addToCart(data)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg  ${data.in_stock ? "hover:bg-blue-800":"cursor-not-allowed bg-red-200 hover:red-400"}`} disabled={data.in_stock ? "":"disabled"}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>}
                {isInCart && (<span className='dark:text-white'>Product added in your cart</span>)}
              </p>
              <p className="text-lg text-gray-900 dark:text-slate-200">
              {data.long_description}
                </p>
            </div>
          </div>
        </section>
      </main> 
  )
}
