import React, { useState } from "react";

function Form({getdata}) {
  const [weight,setWeight] = useState("")
  const [height,setheight] = useState("")
  const [alert,setalert] = useState(false)

  const onSubmit = (e)=>{
    if(isNaN(weight)||isNaN(height)){
      setalert(true)
    }
    else {
      getdata(weight,height)
      setalert(false)
    }
    e.preventDefault(); 
  };

    return ( 
      <div class='col-md-5'>
      <form class="col text-center  bg-light" onSubmit={onSubmit}>
      <h1>BMI CALCULATOR</h1>
      <div class="mb-3 ">
        <label for="exampleInputEmail1" class="form-label">WEIGHT</label>
        <input type="text" onChange={(e)=>setWeight(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
        
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">HEIGHT</label>
        <input type="text" onChange={(e)=>setheight(e.target.value)}  class="form-control" id="exampleInputPassword1" required/>
      </div>
      <button type="submit" class="btn btn-primary">GET BMI</button>
    </form>
   {alert&&<div class="alert col-md-6 m-3 alert-primary" role="alert">invalid input</div>}
    </div>
    )
}

export default Form