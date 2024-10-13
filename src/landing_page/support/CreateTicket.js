import React from 'react'

function CreateTicket() {
  return (
    <div className='container-fluid' id='supportHero'>
      <div className="p-4" id='supportWrapper'>
        <h4>Support Portal</h4>
        <a href="">Track tickets</a>
      </div>

      <div className="row p-5 m-3">
        <div className="col-6 p-5">
          <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg: how do i activate F&Q, why is my order getting rejected..." /><br />
          <a href=''>Track account opening</a> 
          <a href='' style={{marginLeft: "20px"}}>Track segment activation</a> 
          <a href='' style={{marginLeft: "20px"}}>Intraday margins </a>
          <a href='' style={{marginLeft: "20px"}}>Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h1 className='fs-3'>Featured</h1>
          <ol>
            <li><a href='' style={{lineHeight: "2.5"}}>Suspension of trading - IDFC Limited</a></li>
            <li><a href='' style={{lineHeight: "2.5"}}>Rights Entitlements listing in October 2024</a></li>
          </ol>          
        </div>
      </div>
    </div>
  )
}

export default CreateTicket
