import React,{useState} from 'react'
import "../../style/return.css";

export default function Return() {

  const val2 = ["Delhi","Mumbai","Agra","Kolkata","Chennai","Pune","Ahmedabad"];
  const [val ,setVal] = useState('');
  const [pal ,setPal] = useState('');

  return (
    <>
      <div className="content-keeper">
            <div className="from-1">
                <p>Leaving</p>
                <div className="searchbox">
              <input
                type="text"
                list='mapping1'
                id="from"
                name="from"
                onChange={(e)=>setVal(e.target.value)}
                placeholder="From"
              />
              <datalist id="mapping1">
                {val2.map((index)=><option>{index}</option>)}
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
                onChange={(e)=>setPal(e.target.value)}
                
                placeholder="To"
              />
               <datalist id="mapping2">
                {val2.map((index)=><option>{index}</option>)}
              </datalist>
              </div>
            </div>
            <div className="departure-1">
                <p>Departure</p>
              <input
                type="date"
                id="Departure"
                name="Departure"
                
                placeholder="DD/MM/YYYY"
              />
            </div>
            <div className="return-1">
                <p>Return</p>
              <input
                
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
                name="passenger"
                
                placeholder="passenger"
              />
            </div>
          </div>
    </>
  )
}
