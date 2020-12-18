import React from 'react';
import { useState } from 'react';
import '../style/Quizcard.scss';

const Quizcard = (props)=>{

    const [currentGuess, setCurrentGuess] = useState(null);
    const [clickedBtn, setClickedBtn] = useState(null);
    const initialStyle = 'guess-btn';

    const applyStyle = (id) => {

        let style ='';

        if (id === props.right_answer) {
            style = 'right';
        } else {
            style = 'wrong';
        }
        return style;
    }

    const applyClickedStyle = (id) => {

        let style ='';

        if (id === clickedBtn) {
            style = 'clicked';
        } else {
            style = '';
        }
        return style;
    }

    const handleClick = (id) => {

        setClickedBtn(id);
        props.addScore(id);

    }

    const handleNext = (id) => {

// ändra fråga
    }


    return(
        <div className="quiz-card">
            <h2>{props.question}</h2>
            <ul className="answers">
                <li className="answer-list-item">
                    <button
                    className={`${initialStyle} ${currentGuess && applyStyle('1')} ${clickedBtn && applyClickedStyle('1')}`}
                    onClick={()=> {
                        if (!currentGuess){
                            setCurrentGuess('1')
                            handleClick('1')
                        }
                        }}> 
                    {props.answer_1}
                    </button>
                </li>
                <li className="answer-list-item">
                    <button 
                    className={`${initialStyle} ${currentGuess && applyStyle('2')} ${clickedBtn && applyClickedStyle('2')}`}
                    onClick={()=> {
                        if (!currentGuess){
                            setCurrentGuess('2')
                            handleClick('2')
                        }
                        }}> 
                    {props.answer_2}
                    </button>
                </li>
                <li className="answer-list-item">
                    <button 
                    className={`${initialStyle} ${currentGuess && applyStyle('3')} ${clickedBtn && applyClickedStyle('3')}`}
                    onClick={()=> {
                        if (!currentGuess){
                            setCurrentGuess('3')
                            handleClick('3')
                        }
                        }}> 
                    {props.answer_3}
                    </button>
                </li>
                <li className="answer-list-item">
                    <button 
                    className={`${initialStyle} ${currentGuess && applyStyle('4')} ${clickedBtn && applyClickedStyle('4')}`}
                    onClick={()=> {
                        if (!currentGuess){
                            setCurrentGuess('4')
                            handleClick('4')
                        }
                        }}> 
                    {props.answer_4}
                    </button>
                </li>
                
            </ul>
            <button className="next-question">Nästa fråga</button>
        </div>
    )
}
export default Quizcard;