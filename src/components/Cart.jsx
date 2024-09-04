import { useDispatch, useSelector } from 'react-redux'
import { addProduct, removeProduct } from './redux/cartSlice'
import '../index.css'

const Cart = () => {
    const dispatch = useDispatch()
    const cartItem = useSelector((state) => state.cart.items)
    return (
        <>
            helloCart
        </>
    )
}

export default Cart
