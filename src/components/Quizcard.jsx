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

    const handleNext = () => {

        props.setNextQuestion()

    }


    return(
        <div className="quiz-card">
            <span className='qf-legend'>{props.legend.question} / {props.legend.length}</span>
            {props.question_image && 
                <figure className="question-img-wrapper">
                    <img src={props.question_image} alt={props.question}/>
                </figure>}
                <section className="card-content">
                    <h3>{props.question}</h3>
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
                            {props.answer_1.replace(/\\/g, '')}
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
                            {props.answer_2.replace(/\\/g, '')}
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
                            {props.answer_3.replace(/\\/g, '')}
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
                            {props.answer_4.replace(/\\/g, '')}
                            </button>
                        </li>
                        
                    </ul>
                    {currentGuess && props.explanation && 
                    <div>
                        <p>
                            {props.explanation}
                        </p>
                    </div>
                    }
                </section>
            <button 
            className="next-question"
            disabled={currentGuess ? false : true}
            onClick={()=> {
                if (currentGuess) {
                    handleNext();
                    setCurrentGuess(null);
                    setClickedBtn(null);
                }
                }}>
            {props.lastQuestion ? 'Visa resultat!' : 'Nästa fråga' }
            </button>
        </div>
    )
}
export default Quizcard;