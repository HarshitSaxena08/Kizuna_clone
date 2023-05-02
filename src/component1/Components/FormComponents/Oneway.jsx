import React, { useState,useRef } from 'react'
import "../../style/oneway.css";

export default function Oneway() {

const val1 = ["Delhi","Mumbai","Agra","Kolkata","Chennai","Pune","Ahmedabad"];
const travellers = ["1","2","3","4","5","6","7","8"];

const dateInputRef = useRef(null);


const [val,setVal] = useState({
from:'',
to:'',
Departure:'',
Travellers:'',
})


const changeHandle = (e) =>{
  let name = e.target.name;
  let value = e.target.value;
  setVal({...val, [name]:value})
}
function handleSubmit(e){
  e.preventDefault()
  if(val.from===val.to){
    alert("Two sections cannot be same");
  }
  else{
    console.log(val)
  }
  
}

  return (
    <>

<div className="content-keeper">
            <div className="from-1">
                <p>Leaving</p>
                <div className="searchbox">
              <input
                type="text"
                list='mapping'
                id="from"
                name="from"
                value={val.from}
                onChange={changeHandle}
                placeholder="From"
              />
              <datalist id="mapping" value={val.from} onChange={changeHandle}>
                {val1.map((index)=>(<option>{index}</option>))}
              </datalist>
              </div>

            </div>
            <div className="to-1">
                <p>Going To</p>
                <div className="searchbox2">
              <input
                type="text"
                list='mapping2'
                id="to"
                name="to"
                value={val.to}
                onChange={changeHandle}
                
                placeholder="To"
              />
               <datalist id="mapping2" value={val.to} onChange={changeHandle}>
                {val1.map((index)=>(<option>{index}</option>))}
              </datalist>
              </div>
            </div>
            <div className="departure-1">
                <p>Departure</p>
              <input
                type="date"
                id="Departure"
                name="Departure"
                value={val.Departure}
                ref={dateInputRef}
                onChange={changeHandle}
                
                placeholder="DD/MM/YYYY"
              />
            </div>
            <div className="returnn-1">
                <p>Return</p>
              <input
                disabled="true"
                type="date"
                id="return-1"
                name="return-1"
                
                placeholder="return-1"
              />
            </div>
            <div className="passenger-1">
                <p>Travellers</p>
              <input
                type="text"
                id="passenger"
                list='Traveller'
                name="Travellers"
                value={val.Travellers}
                onChange={changeHandle}

                
                placeholder="passenger"
              />
              <datalist value={val.Travellers} id='Traveller' onChange={changeHandle}>
                {travellers.map((number)=>(
                  <option value={number} key={number}>{number}</option>
                ))}
              </datalist>
            </div>
            
          </div>
          <button className='btop' onClick={handleSubmit}>Search</button>
         
      
    </>
  )
}
