import React from 'react'
import './Properties.css'
import dacha1 from './dacha1.png'
import dacha2 from './dacha2.png'
import dacha3 from './dacha3.png'
const Properties = () => {
  return (
    <div>
      <h3 className='pp_section'>| Properties</h3>
      <div className="h1_lar">
        <h1 className='h1_1'>We Provide</h1> 
        <h1 className='h1_2'> The Best Property You </h1>
        <h1 className='h1_3'>Like</h1>
      </div>

      <div className="cards">

        <div className="card">
            <img src={dacha1} alt="" />
        <div className="tepa">
        <button>Luxury Villa</button>
        <h2>$2.264.000</h2>
        </div>
        <h2>18 New Street Miami, OR 97219</h2>

        <div className="plar">
        <p>Bedrooms: <span className='qoraytir'>8</span></p>
        <p>Bathrooms: <span className='qoraytir'>8</span></p>
        </div>

        <div className="pplar2">
        <p>Are: <span className='qoraytir'>542m<sup>2</sup></span></p>
        <p>Floor: <span className='qoraytir'>3</span></p>
        <p>Parking: <span className='qoraytir'>6</span> spots</p>
        </div>
        <button className='btnnn'>Schedule a Visit</button>
        </div>

        <div className="card">
            <img src={dacha2} alt="" />
        <div className="tepa">
        <button>Luxury Villa</button>
        <h2>$1.180.000</h2>
        </div>
        <h2>54 Mid Street Florida, OR 28001</h2>

        <div className="plar">
        <p>Bedrooms: <span className='qoraytir'>6</span></p>
        <p>Bathrooms: <span className='qoraytir'>5</span></p>
        </div>

        <div className="pplar2">
        <p>Are: <span className='qoraytir'>450m<sup>2</sup></span></p>
        <p>Floor: <span className='qoraytir'>3</span></p>
        <p>Parking: <span className='qoraytir'>8</span> spots</p>
        </div>
        <button className='btnnn'>Schedule a Visit</button>
        </div>



        <div className="card">
            <img src={dacha3} alt="" />
        <div className="tepa">
        <button>Luxury Villa</button>
        <h2>$1.460.000</h2>
        </div>
        <h2>26 Old Street Miami, OR 38540</h2>

        <div className="plar">
        <p>Bedrooms: <span className='qoraytir'>5</span></p>
        <p>Bathrooms: <span className='qoraytir'>4</span></p>
        </div>

        <div className="pplar2">
        <p>Are: <span className='qoraytir'>225m<sup>2</sup></span></p>
        <p>Floor: <span className='qoraytir'>3</span></p>
        <p>Parking: <span className='qoraytir'>10</span> spots</p>
        </div>
        <button className='btnnn'>Schedule a Visit</button>
        </div>






      </div>
    </div>
  )
}

export default Properties
