import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Total.css';

export default function Total(props) {
    const [bill,setbill] =useState();
    const billvalue= (event)=>{
        setbill(event.target.value);
        
    }
    // console.log(bill);
  const [person,setperson]=useState();
  const countofperson=(event)=>{
    setperson(event.target.value);
    
  }
//   console.log(person);
  const [tip,settip]=useState();
  const tipvalue=(event)=>{

    settip(event.target.innerHTML);
    let btn=document.querySelectorAll('.tiprate')
    Array.from(btn).forEach((tiprate)=>{tiprate.style.backgroundColor='hsl(183, 100%, 15%)';})

    event.target.style.backgroundColor='hsl(172, 67%, 45%)';
  }
//   console.log(tip);
  let tipper=parseInt(tip);
//   console.log(tipper);

  const [total,settotal]=useState(0);

  const [tipamount,settipamount]=useState(0);

  const amt = ()=>{
      
    settipamount(((bill*tipper)/100)/person);
    settotal(bill/person +tipamount );
    
  }
  setTimeout(() => {
    settotal(bill/person +tipamount );
  }, 1000);

  const reset= ()=>{
    setbill('');
    setperson('');
    settip('');
    settipamount(0);
    settotal(0);
    let btn=document.querySelectorAll('.tiprate')
    Array.from(btn).forEach((tiprate)=>{tiprate.style.backgroundColor='hsl(183, 100%, 15%)';})
  }
//   let tipper= tip.slice(tip.length-1)
//   let finaltip=parseInt(tipper);
// let mystyle={
//     color: "red",
//     backgroundColor:'green',

    
// }

  return (
<>
<h1 className='my-4 mx-2 background-success text-danger text-center bg-info-subtle' >Know your bill!</h1>
  <div className="d-flex justify-content-center bg">
    <div className="container position-absolute rounded-4 mt-5  ">
        <div className="row m-2 ">
            <div className="col-md-6">
                    <div className="row m-2">
                        <span className="t-color">{props.billname}</span>
                    <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input  className="form-control txt-color " value={bill} onChange={billvalue} id="bill" type="number"/>
                    </div>
                </div>
                <div className="row m-2">
                    <span className="t-color">Select TIP %</span>
                    <div className="col-3 tx-color tippercen btn m-1 w-auto tiprate " onClick={tipvalue}>5%</div>
                    <div className="col-3 tx-color tippercen btn m-1 w-auto tiprate " onClick={tipvalue}>10%</div>
                    <div className="col-3 tx-color tippercen btn m-1 w-auto tiprate " onClick={tipvalue}>15%</div>
                    <div className="col-3 tx-color tippercen btn m-1 w-auto tiprate " onClick={tipvalue}>20%</div>
                    <div className="col-3 tx-color tippercen btn m-1 w-auto tiprate " onClick={tipvalue}>25%</div>
                </div>
                <div className="row m-2">
                    <span className="t-color">Number of person</span>
                    <div className="input-group">
                        <span className="input-group-text "><img src="./icon-person.svg" alt=""/></span>
                        <input  className="form-control txt-color " value={person} onChange={countofperson} id="person" type="number"/>
                    </div>
                </div>
            </div>
            <div className="side col-md-6 p-2 rounded-3">
                <div className="row tipamount mt-3">
                    <span className="h3 text-white m-0">Tip amount <span className="amount p-3 fs-4" id="result1">$ {tipamount} </span></span><span className="fs-6 fw-normal t-color">/person</span>
                </div>
                <div className="row mt-3">
                    <span className="h3 text-white m-0">Total<span className="tamount p-5 fs-4" id="result2">$ {total} </span></span> <span className="fs-6 fw-normal t-color">/person</span>
                                
                </div>
                <div className="row mt-4">
                    <button type="button" className="btn border-2 w-auto p-3 m-3 h-50 m-auto back " onClick={reset}>RESET</button>
                    <button type="button" className="btn border-2 w-auto p-3 m-3 h-50 m-auto back my-2" onClick={amt}>SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</>
  )
}
Total.propTypes={
    billname: PropTypes.string,

}