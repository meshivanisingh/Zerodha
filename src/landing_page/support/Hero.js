import React from 'react'

function Hero() {
  return (
    <div className='container'>
      <div className="row p-3 mt-5 mb-4">
        <h3 className='text-muted'>To create a ticket, select a relevant topic</h3>
      </div>

      <div className='row'>
      <div className="col-4 p-4 mt-2 mb-2">
        <h2><i class="fa-solid fa-xs fa-circle-plus p-2"></i>Account Opening</h2>
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Getting started</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Online</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Offline</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Charges</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Company, Partnership and HUF</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Non Resident Indian (NRI)</a><br />
      </div>

      <div className="col-4 p-4 mt-2 mb-2">
        <h2><i class="fa-solid fa-user fa-xs p-2"></i>Your Zerodha Account</h2>
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Login credentials</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Your Profile</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Account modification and segment addition</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>CMR & DP ID</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Nomination</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Transfer and conversion of shares</a><br />
      </div>

      <div className="col-4 p-4 mt-2 mb-2">
        <h2><i class="fa-solid fa-chart-simple fa-xs p-1"></i> Trading and Markets</h2>
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Trading FAQs</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Kite</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Margins</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Product and order types</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Corporate actions</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Kite features</a><br />
      </div>
      </div>

      <div className="row">
      <div className="col-4 p-4 mt-2 mb-2">
        <h2><i class="fa-solid fa-folder-closed fa-xs p-2"></i>Funds</h2>
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Fund withdrawal</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Adding funds</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Adding bank accounts</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>eMandates</a><br />
      </div>

      <div className="col-4 p-4 mt-2 mb-2">
        <h2><i class="fa-brands fa-creative-commons-sa fa-xs p-2"></i>Console</h2>
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>IPO</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Portfolio</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Funds statement</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Profile</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Reports</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Referral program</a><br />
      </div>

      <div className="col-4 p-4 mt-2 mb-2">
        <h2><i class="fa-solid fa-coins fa-xs p-2"></i>Coin</h2>
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Understanding mutual funds and Coin</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Coin app</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Coin web</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Transactions and reports</a><br />
        <a href="" style={{textDecoration:"none", lineHeight:"2"}}>National Pension Scheme (NPS)</a><br />
      </div>
      </div>
      </div>
  )
}

export default Hero;
