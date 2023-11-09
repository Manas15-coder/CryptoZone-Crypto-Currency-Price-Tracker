import React from 'react'
import './Loader.css'
function Loader() {
  return (
    <section id="loader">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div class="lds-hourglass"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Loader