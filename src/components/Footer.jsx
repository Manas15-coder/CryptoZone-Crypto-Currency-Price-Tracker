import React from 'react'

function Footer() {
    return (
        <>
            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className='social-btn text-center'>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-discord"></i>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-youtube"></i>
                            </p>
                            <p className='footer-links text-center'>
                                <a href="">Privacy</a>
                                <a href="">Terms of Use</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer