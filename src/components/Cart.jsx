import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, incrementQuantity, decrementQuantity } from './redux/cartSlice';
import '../cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart.items);
    
    const handleRemoveItem = (id) => {
        dispatch(removeProduct(id));
    };
    
    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

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
                                    <p>ID: {item.id}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <button onClick={() => handleIncrement(item.id)}>+</button>
                                    <button onClick={() => handleDecrement(item.id)}>-</button>
                                    <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Cart;
