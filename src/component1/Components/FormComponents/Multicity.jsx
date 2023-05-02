import React,{useState} from 'react'
import "../../style/multicity.css";

export default function Multicity() {

  const val1 = ["Delhi","Mumbai","Agra","Kolkata","Chennai","Pune","Ahmedabad"];
  const [val ,setVal] = useState('');
  const [pal ,setPal] = useState('');

  return (
    <>
      <div className="content-keeper">
        <p className='ui-to'>Flight 1</p>
            <div className="from-1">
                <p>Origin</p>
                <div className="searchbox">
              <input
                type="text"
                list='mapping'
                id="from"
                name="from"
                onChange={(e)=>setVal(e.target.value)}
                placeholder="From"
              />
              <datalist id="mapping">
                {val1.map((index)=><option>{index}</option>)}
              </datalist>
              </div>
            </div>
            <div className="to-1">
                <p>Destination</p>
                <div className="searchbox2">
              <input
                type="text"
                list='mapping2'
                id="to"
                name="to"
                onChange={(e)=>setPal(e.target.value)}
                
                placeholder="To"
              />
               <datalist id="mapping2">
                {val1.map((index)=><option>{index}</option>)}
              </datalist>
              </div>
            </div>
            <div className="departure-1">
                <p>Depart Date</p>
              <input
                type="date"
                id="Departure"
                name="Departure"
                
                placeholder="DD/MM/YYYY"
              />
            </div>
            <div className="returnnn-1">
               <a href='/'> <p>+Add more flights</p></a>
            </div>
            <div className="passenger-1">
                <p>Travellers</p>
              <input
                type="text"
                id="passenger"
                name="passenger"
                
                placeholder="passenger"
              />
            </div>
          </div>
    </>
  )
}
