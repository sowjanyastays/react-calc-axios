import React from 'react'
import { useState, useEffect } from 'react';
import './CalculatorComponent.css'

function CalculatorComponent() {
    const [currentSum,setCurrentSum]=useState(0);
    const [clear,setClear]=useState(false);
  
    useEffect(()=>{
      document.querySelector('#result').value="";
    },[])
    
    useEffect(()=>{
      if(clear)
      document.querySelector('#result').value="";
    })
  
    const Add=(e)=>{
      e.preventDefault();
      if(clear) setClear(false);
      let currentNum = document.querySelector('#num1').value
      let currentNum2 = document.querySelector('#num2').value
      if(currentNum=='')
      return;
      let sum= parseInt(currentNum)+parseInt(currentNum2);
      setCurrentSum(sum);
      document.querySelector('#num1').value="";
      document.querySelector('#num2').value="";
        
    }
    const Subtract=(e)=>{
        e.preventDefault();
        if(clear) setClear(false);
        let currentNum = document.querySelector('#num1').value
        let currentNum2 = document.querySelector('#num2').value
        if(currentNum=='')
        return;
        let sum= parseInt(currentNum)-parseInt(currentNum2);
        setCurrentSum(sum);
        document.querySelector('#num1').value="";
        document.querySelector('#num2').value="";
      }
      const Multiply=(e)=>{
        e.preventDefault();
        if(clear) setClear(false);
        let currentNum = document.querySelector('#num1').value
        let currentNum2 = document.querySelector('#num2').value
        if(currentNum=='')
        return;
        let sum= parseInt(currentNum)*parseInt(currentNum2);
        setCurrentSum(sum);
        document.querySelector('#num1').value="";
        document.querySelector('#num2').value="";
          
      }
      const Divide=(e)=>{
        e.preventDefault();
        if(clear) setClear(false);
        let currentNum = document.querySelector('#num1').value
        let currentNum2 = document.querySelector('#num2').value
        if(currentNum=='')
        return;
        let sum= parseInt(currentNum)/parseInt(currentNum2);
        setCurrentSum(sum);
        document.querySelector('#num1').value="";
        document.querySelector('#num2').value="";
          
      }
  
    const Clear=(e)=>{
      e.preventDefault();
      console.log('sum:', currentSum);
      document.querySelector('form').reset();
      setClear(true);
      setCurrentSum(0);
    }
  
    return (
        <>
        <h1>Calculator</h1>
        <form>
              <input type="text" id="result" value={currentSum}  readOnly />   
              <input type="text" id="num1" placeholder="enter a number" />
              <input type="text" id="num2" placeholder="enter a number" />
              <div className='buttons'>
              <button  onClick={Add}>+</button>
              <button onClick={Subtract}>-</button>
              <button onClick={Multiply}>*</button>
              <button onClick={Divide}>/</button>
             
              
              <button onClick={Clear}>C</button>
              </div>
              
        </form>
        </>
    );
}

export default CalculatorComponent
