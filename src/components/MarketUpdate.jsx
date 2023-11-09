import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader/Loader'

function MarketUpdate() {
    const [cryptoData, setCryptoData] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const sendRequest = async () => {
        try {
            const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            setCryptoData(data)
            setIsLoading(false)
        }
        catch (error) {
            console.log('Error while fetching data', error)
        }
    }
    useEffect(() => {
        sendRequest();
    }, [])
    return (
        <>
            <section id="market">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className='display-1 text-center'>
                                Market Update
                            </h1>
                            <div className='table-responsive'>
                                <table className='center'>
                                    <thead className='thead'>
                                        <tr>
                                            <th>Coin</th>
                                            <th>Price</th>
                                            <th>24h Change</th>
                                            <th>Market Cap</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { cryptoData.length > 0 ? (cryptoData && cryptoData.map((data) => (
                                            <tr>
                                                <td><span> <img src={data?.image} className='img-fluid coin-img' alt="" /></span></td>
                                                <td>$ {data?.current_price}</td>
                                                <td><p className={data.price_change_percentage_24h >= 0 ? "green-text" : "red-text"}>{data?.price_change_percentage_24h} %</p></td>
                                                <td>$ {data?.market_cap_change_24h}</td>
                                            </tr>
                                        ))) :(<Loader/>)
                                        }

                                    </tbody>
                                </table></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MarketUpdate