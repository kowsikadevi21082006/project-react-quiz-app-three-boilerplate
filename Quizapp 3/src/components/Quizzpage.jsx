import React, {Component, useState} from "react"
import "./Quizzpage.css"
import { Link } from "react-router-dom"
import quizdata from "../quizdata.jsx"
import Resultpage from "./Resultpage"


const Quizzpage = ({scoreUpdate,countUpdate}) => {
    const [count,setCount]=useState(0)
    const[score,setScore]=useState(0)
    const{question,optionA,optionB,optionC,optionD,answer}=quizdata[count]
  
    const inc=()=>{
        if(count==quizdata.length-1){
            setCount(0)
        }
        else{
        setCount(count+1)
        }

    }
    const dec=()=>{
        if(count==0){
            setCount(quizdata.length-1)
        }
        else{
        setCount(count-1)
        }
    }
    const checkCorrect=(item)=>{
     if(count==quizdata.length-1){
        setCount(0)
     }
     else{
        if(item==answer){
            setScore(score+1)
            alert("correct answer")
            setCount(count+1)
           }
           else{
            alert("wrong answer")
            setCount(count+1)
           }
     }
    
    }

    const finishTest=()=>{
        scoreUpdate(score)
        countUpdate(count)
    }
   
   

    return(
        <>
         <div className="main-container">
            <h2 className="questions">Questions</h2>
            <p className="questionNo">{count+1} of 15</p>
            <h3>{question}</h3>
            <div className="options">
                <div onClick={()=>{checkCorrect(optionA)}}>{optionA}</div>
                <div onClick={()=>{checkCorrect(optionB)}}>{optionB}</div>
                <div onClick={()=>{checkCorrect(optionC)}}>{optionC}</div>
                <div onClick={()=>{checkCorrect(optionD)}}>{optionD}</div>
            </div>
            <div id="btn-container">
            <div className="btns">
                 <button onClick={dec}  className="previous">previous</button>
                 <button onClick={inc}  className="next">Next</button>
                 <Link to="/Resultpage">
                 <button onClick={()=>{alert("Do you want to quit the quiz")}} className="quit">Quit</button>

                 </Link>
                 <Link to="/Resultpage">
                 <button onClick={finishTest}>Finish</button>
                 </Link>
                
            </div>
            </div>
         </div>
         
        </>
    ) 
  
}

export default Quizzpage