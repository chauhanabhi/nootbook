import { CartEmpaty } from './components/CartEmpaty'
import { CartList } from './components/CartList'
import { useCart } from '../../context'

export const CartPage = () => {
  const {cartList} = useCart();
  return (
    <main>  
        {cartList.length === 0 && <CartEmpaty />}
        {cartList.length > 0 && <CartList />}
    </main>
  )
}
