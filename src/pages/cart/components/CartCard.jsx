import { useCart } from "../../../context";


export const CartCard = ({product}) => {
 const {id,name,price,image_local} = product;
 const {removeToCart} = useCart();
  return (
    <div>
       <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
          <a href="">
            <img className="w-32 rounded" src={image_local} alt={name} />
          </a>
          <div className="">
            <a href="">
              <p className="text-lg ml-2 dark:text-slate-200">{name}</p>
            </a>            
            <button onClick={() => removeToCart(product)} className="text-base ml-2 text-red-400">Remove</button>
          </div>
      </div>
      <div className="text-lg m-2 dark:text-slate-200">
        <span>${price}</span>
      </div>
    </div>
    </div>
  )
}
