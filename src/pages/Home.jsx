import React from 'react'
import Banner from '../components/Banner'
import MarketUpdate from '../components/MarketUpdate'
import Choose from '../components/Choose'
import Join from '../components/Join'
import Footer from '../components/Footer'


function Home() {
    return (
        <>
           <Banner/>
           <MarketUpdate/>
           <Choose/>
           <Join/>
           <Footer/>
        </>
    )
}

export default Home