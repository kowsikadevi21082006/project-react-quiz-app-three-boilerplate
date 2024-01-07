import React, { Component } from 'react'
import "./Homepage.css"
import { Link } from 'react-router-dom'

export default class Homepage extends Component{
 render(){
    return(
        <>
        <div className='container'>
        <h2 className='quizz'>Quizz App</h2>
         <Link to="Quizzpage">
         <button className='play'>Play</button>
         </Link>
        </div>
        </>
    )
 }
  

}