import React,{useState} from 'react'
import "../../style/aircalender.css";

export default function Aircalender() {

  const val1 = ["Delhi","Mumbai","Agra","Kolkata","Chennai","Pune","Ahmedabad"];
  const [val ,setVal] = useState('');
  const [pal ,setPal] = useState('');

  return (
    <div>
      <div className="content-keeper">
            <div className="from-1">
                <p>Leaving</p>
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
                {val1.map((index)=><option>{index}</option>)}
              </datalist>
              </div>
            </div>
            <div className="departuree-1">
                <p>Departure Month</p>
                <select name="cars" id="cars">
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="Dcember">Dcember</option>
                </select>
            </div>
            <div className="returrn-1">
                <p>Departure Year</p>
                <select name="cars" id="cars">
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>
            </div>
          
          </div>
    </div>
  )
}
