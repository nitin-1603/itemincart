
import { useEffect } from 'react'
import '../App.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from './redux/cartSlice'

const Card = () => {
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const cartItem = useSelector((state)=> state.cart.items)

    useEffect(() => {
        const fetchData = async () => {
            const fetchData = await fetch('https://api.escuelajs.co/api/v1/products')
            const parseData = await fetchData.json();
            setData(parseData)
        }
        fetchData()
    }, [])

    const handleAddToCart = (item) => {
        const itemInCart = cartItem.some((itemsome)=> itemsome.id === item.id )

        if(itemInCart){
            window.open('./cart', '_blank')
        }else{

            dispatch(addProduct(item))
        }

    }

    return (
        <>
            <div className='cardBorder'>
                {data.map((item) => {
                    return (
                        <div key={item.id} className="card">
                            <img src={item.category.image} alt="Product Image" className="card-image" />
                            <div className="card-content">
                                <h4 className="card-title">{item.title}</h4>
                                <p className="card-price">Price : {item.price}</p>
                                <p className="card-price">ID : {item.id}</p>
                                <p className="card-category">{item.category.name}</p>
                                <button onClick={() => handleAddToCart(item)} className="card-button">Add to Cart</button>
                            </div>
                        </div>

                    )
                })

                }
            </div>
        </>
    )
}

export default Card
