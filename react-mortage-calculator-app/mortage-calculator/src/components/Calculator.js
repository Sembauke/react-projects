import React, {useState, useEffect} from 'react'
import Button from './Button'
import Validator from './Validator'
function Calculator() {

    const [houseCost, onCostChange] = useState(100000)
    const [equity, onEquityChange] = useState(0)
    const [timeInYears, onTimeyYearsChange] = useState(1)
    const lone = <Validator equity={equity} houseCost={houseCost}/>
    const perMonth = (Math.round((lone.props.houseCost - lone.props.equity) / (timeInYears*12)) * 100) /100 


    return(
        <div className="wrapper">
            <div className="content">
                <h1 className="title">Mortage Calculator</h1>
            <div className="info">
                 <h3>Purchase price: ${houseCost}</h3>           
                <input 
                    type="range" 
                    min="100000" 
                    max="1000000" 
                    value={houseCost}
                    onChange={({target: {value: radius}}) => {
                        onCostChange((Math.ceil(radius/ 10000) * 10000));
                    }}
                />
            </div>
            <div  className="info">
                <h3>Equity: ${equity}</h3> 
                <input 
                    type="range" 
                    min="0" 
                    max="1000000" 
                    value={equity}
                    onChange={({target: {value: radius}}) => {
                        onEquityChange((Math.ceil(radius/ 10000) * 10000));
                    }}
                />
            </div>
            <div  className="info">
                <h3>Repayement time: {timeInYears} years</h3> 
                <input 
                    type="range" 
                    min="1" 
                    max="35" 
                    value={timeInYears}
                    class="slider" 
                    id="myRange"
                    onChange={({target: {value: radius}}) => {
                        onTimeyYearsChange(radius);
                    }}
                />
            </div>
            <div className="output">
                <h3>Lone amount:</h3> 
                <h2 className={lone.props.houseCost - lone.props.equity >= 0  ? "valid" : "unvalid"}>{lone}</h2>
            </div>
            
            <div className="output">
                <h3>Estimated pr. month:</h3>
                <h2>{Math.sign(perMonth) === -1 ? "$0" : "$"+perMonth}</h2>
                <h5 >2.10% eff./2.4% nrom</h5>
                
            </div>  
                  
            </div>
            <Button/>                
                    
              
        </div>
       
    )
   
}

export default Calculator
