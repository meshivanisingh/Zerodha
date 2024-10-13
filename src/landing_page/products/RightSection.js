import React from 'react'

function RightSection({imageURl, productName, productDescription,learnMore, kiteConnect}) {
  return (
    <div className='container mt-5'>
      <div className="row">        
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          {learnMore && (
            <div>
            <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
          )}

          {kiteConnect && (
            <div>
              <a href={kiteConnect} style={{textDecoration: "none"}}>Kite Connect <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
          )}

        </div>
        <div className="col-6">
          <img src={imageURl}/>
        </div>
      </div>
    </div>
  )
}

export default RightSection;




