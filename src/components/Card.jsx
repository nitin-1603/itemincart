
import { useEffect } from 'react'
import '../App.css'
import { useState } from 'react'


const Card = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const fetchData = await fetch('https://fakestoreapi.com/products')
            const parseData = await fetchData.json();
            setData(parseData)
        }
        fetchData()
    }, [])


    return (
        <>
            <div className='cardBorder'>
                {data.map((item) => {
                    return (
                        <div key={item.id} className="card">
                            <img src={item.image} alt="Product Image" className="card-image" />
                            <div className="card-content">
                                <h4 className="card-title">{item.title}</h4>
                                <p className="card-price">{item.price}</p>
                                <p className="card-category">{item.category}</p>
                                <button className="card-button">Submit</button>
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
