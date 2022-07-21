import React from 'react'

function Bmiscore({bmi,bminame}) {


    return (

      <div class="row mt-5">
      <div class="col-sm-3" align="center">
        <div class="card" >
          <div class="card-body">
           <small>Your Bmi Score</small>
             <div className="col-md-6 mt-2">
                <div class="card bg-light" >
                <h2 class="mt-3">{bmi}</h2>          
              </div>         
           </div>  
                <h5 class="mt-2">{bminame}</h5> 
                <h6>classtype</h6>
          </div> 
        </div>   
      </div>
      </div>

    )
}

export default Bmiscore