import React, { Component } from 'react'
import "./Resultpage.css"
import { Link } from 'react-router-dom'


const Resultpage = ({score,count}) => {
    return (
        <>
        <div className='result-container'>
           <h2 className='heading'>Result</h2>
        <div className='result'>
           <h3 className='status'>{score<5?"need more practice":score<10 && score>5?"You can do that":"You are almost there"}</h3>
           <h2 className='score'>Your score is {score}</h2>
           <div className='score-container'>
            <div>
              <p>Total No. of questions</p>
              <p>Total No. of questions attempted</p>
              <p>Total No. of correct answers</p>
              <p>Total No. of wrong answers</p>
            
            </div>
            <div>
              <p>15</p>
              <p>{count}</p>
              <p>{score}</p>
              <p>{15-score}</p>
            </div>
           </div>
     
        </div>
         <Link to="/Quizzpage">
         <button className='play-again'>Play Again</button>
         </Link>
        
        <Link to="/">
        <button className='go-back'>Back to home</button>
        </Link>
        </div>
        </>
      )
}

export default Resultpage