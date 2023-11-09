import React from 'react'

function Choose() {
    return (
        <>
            <section id="choose">
                <div className="container">
                    <div className="row">
                        <h1 className='display-1 text-center'>Why Choose Us</h1>
                        <div className="col-md-4">
                            <div className="choose-cards">
                                <div className="choose-card">
                                <i class="fa-solid fa-wallet"></i>
                                    <div className="card-body">
                                        <h6 >CONNECT YOUR WALLET</h6>
                                        <p>Use Trust Wallet, Metamask or to connect to the app.</p>
                                    </div>
                                </div>
                                <div className="choose-card">
                                <i class="fa-solid fa-pencil"></i>
                                    <div className="card-body">
                                        <h6 >SELECT YOUR QUANTITY</h6>
                                        <p>Upload your crypto and set a title, description and price.</p>
                                    </div>
                                </div>
                                <div className="choose-card">
                                <i class="fa-solid fa-list-check"></i>
                                    <div className="card-body">
                                        <h6>CONFIRM TRANSACTION</h6>
                                        <p>Earn by selling your crypto on our marketplace.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src="https://static.vecteezy.com/system/resources/previews/008/851/119/original/3d-illustration-bitcoin-business-wallet-png.png" className='img-fluid' alt="" />
                        </div>
                        <div className="col-md-4">
                        <div className="choose-cards">
                                <div className="choose-card">
                                <i class="fa-solid fa-arrow-down"></i>
                                    <div className="card-body">
                                        <h6>RECEIVE YOUR OWN NFTS</h6>
                                        <p>Invest all your crypto at one place on one platform.</p>
                                    </div>
                                </div>
                                <div className="choose-card">
                                    <div className="card-body">
                                    <i class="fa-solid fa-money-bill"></i>
                                        <h6 >DRIVE YOUR COLLECTION</h6>
                                        <p>We make it easy to Discover, Invest and manage.</p>
                                    </div>
                                </div>
                                <div className="choose-card">
                                <i class="fa-brands fa-stack-overflow"></i>
                                    <div className="card-body">
                                        <h6 >DRIVE YOUR COLLECTION</h6>
                                        <p>We make it easy to Discover, Invest and manage.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default Choose