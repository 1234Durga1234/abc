import React, { useRef } from "react"
import { Link } from "react-router-dom"
import '../styles/Main.css'
import { useDispatch } from "react-redux"
import { setUserId } from "../redux/result_reducer"

export default function Main(){
    const inputRef=useRef(null)
    const dispatch=useDispatch()

    function startQuiz(){
        if(inputRef.current?.value){
           dispatch(setUserId(inputRef.current?.value))
        }
    }

    return(
        <div className="container">
            <h1 className="title text=light">Quiz application</h1>
            <ol>
                <li>you will be asked 10 questions one after another.</li>
                <li>10 points is awarded for the correct answer </li>
                <li>each question has three options.you can choose only one option.</li>
                <li>you can review and change answers before the quiz finish.</li>
                <li>the result will be declared at the end of the quiz.</li>
            </ol>
            <form id="form">
                <input ref={inputRef} type="text" placeholder="Username*"></input>

            </form>
            <div className="start">
            <Link className="btn" to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
            </div>
        </div>
    )
 }