import { useState } from 'react';
import './App.css';
import Bmilist from './components/Bmilist';
import Bmiscore from './components/Bmiscore';
import Form from './components/Form';


function App() {
  
  const [bmi,setbmi] = useState(0.00)
  const [bmitype,setbmitype] = useState("not calculated")
  const [bmirange,setbmirange] = useState({
    "underweight" : {"low":""},
    "normal" : {"low":"","high":""},
    "overweight" : {"low":"","high":""},
    "obesityone" : {"low":"","high":""},
    "obesitytwo" : {"low":"","high":""},
    "obesitythree" : {"low":"","high":""},
  })

  const onFormsub = (w,h) => {
   let b = calbmi(w,h)
   setbmi(b)

   const range = {

    "underweight" : {"low":calweight(18.5,h)},
    "normal" : {"low":calweight(18.5,h),"high":calweight(24.9,h)},
    "overweight" : {"low":calweight(24.9,h),"high":calweight(29.9,h)},
    "obesityone" : {"low":calweight(29.9,h),"high":calweight(34.9,h)},
    "obesitytwo" : {"low":calweight(34.9,h),"high":calweight(39.9,h)},
    "obesitythree" : {"high":calweight(40,h)},

   }
   setbmirange(range)

   let type = Weighttype(bmi)
   setbmitype(type)

  }

  const calbmi = (w,h) => {
    return (w/(h*h)).toFixed(2);
  }

  const calweight =(b,h) =>{
    return (b*h*h).toFixed(2);
  }

  const Weighttype = (bmi) => {

    if(bmi < 18.5){
      return 'under weight'
    }
    else if (18.5 < bmi && bmi < 24.9){
      return 'Normal'    
    }
    else if (24.9 < bmi && bmi < 29.9){
      return 'over wight'    
    }
    else if (29.9 < bmi && bmi < 34.9){
      return 'obisity class 1'    
    }
    else if (34.9< bmi && bmi < 39.9){
      return 'obisity class 2'    
    }
    else if (bmi < 39.9){
      return 'obisity class 3'    
    }

  }

    return ( 
      <>
      <div className="container">
        <div className="row justify-content-center">
       <Form getdata={onFormsub}/>
       </div>
       <Bmiscore  bmi = {bmi} bminame ={bmitype}/>
       <div className="d-flex justify-content-end">
       <Bmilist bmi = {bmi} range={bmirange}/>
       </div>
       </div>
       </>
    );
}

export default App;