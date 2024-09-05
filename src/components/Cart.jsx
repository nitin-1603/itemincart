import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from './redux/cartSlice'
import '../index.css'

const Cart = () => {
    const dispatch = useDispatch()
    const cartItem = useSelector((state) => state.cart.items)
    
    const handleRemoveItem = (id) => {
        dispatch(removeProduct(id))
    }
    
    console.log(cartItem)
    return (
        <>
            <div className='cartContainer'>
                <h2>Shopping Cart</h2>
                {cartItem.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul>
                        {cartItem.map((item) => (
                            <li key={item.id} className="cartItem">
                                <img src={item.category.image} alt={item.title} className='cartItemImage' />
                                <div className="cartItemDetails">
                                    <h3>{item.title}</h3>
                                    <p>Price: ${item.price}</p>
                                    {/* <p>{value}</p>
                                    <button onClick={() => dispatch(productIncrement())}>+</button>
                                    <button onClick={() => dispatch(productDecrement())}>-</button> */}
                                    <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default Cart
