import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader/Loader'

function Banner() {
    const [cryptoData, setCryptoData] = useState('')

    const sendRequest = async () => {
        try {
            const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            setCryptoData(data)
            console.log(data)
        }
        catch (error) {
            console.log('Error while fetching data', error)
        }
    }
    useEffect(() => {
        sendRequest();
    }, [])


    return (
        <section id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner-content">
                            <h1 className='display-1 text-center heading-1' >Track And Trade</h1>
                            <h1 className='display-1 text-center heading-2'>Crypto Currencies</h1>
                        </div>
                    </div>
                    <div className="banner-coins">
                        {cryptoData.length > 0 ? (
                            cryptoData.slice(0,4).map((data, index) => (
                                <div key={index} className="coin-card">
                                    {data && <img src={data.image} className='img-fluid banner-coin' alt="" />}
                                    <div className='card-body'>
                                    <span>
                                        <p>{data.name}</p>
                                        <p className={data.price_change_percentage_24h >= 0 ? "green-text" : "red-text"}>{data?.price_change_percentage_24h} %</p>
                                    </span>
                                    </div>
                                </div>
                            ))
                        ) : (<Loader />)}
                    </div>

                    <i class="fa-solid fa-angles-down fa-beat-fade text-center"></i>
                </div>
            </div>
        </section>
    )
}

export default Banner