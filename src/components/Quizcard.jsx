import React from 'react';
import { useState, useEffect } from 'react';
import '../style/Quizcard.scss';

const Quizcard = (props)=>{

    const [currentGuess, setCurrentGuess] = useState(null);
    const [correct, setCorrect] = useState(null);

    useEffect(()=>{

        if (currentGuess) {
            setCorrect(props.checkAnswer(currentGuess));
            console.log('rätt svar: '+props.right_answer+' ditt svar: ' +currentGuess);
            console.log(correct)
        }

    }, [currentGuess, correct])

    return(
        <div className="quiz-card">
            <h2>{props.question}</h2>
            <ul className="answers">
                <li 
                    className={correct ? 'right' : correct === false ? 'wrong' : ''}
                    onClick={()=> setCurrentGuess('answer_1')}>{props.answer_1}</li>
                <li 
                    className={correct ? 'right' : correct === false ? 'wrong' : ''}
                    onClick={()=> setCurrentGuess('answer_2')}>{props.answer_2}</li>
                <li 
                    className={correct ? 'right' : correct === false ? 'wrong' : ''}
                    onClick={()=> setCurrentGuess('answer_3')}>{props.answer_3}</li>
                <li 
                    className={correct ? 'right' : correct === false ? 'wrong' : ''}
                    onClick={()=> setCurrentGuess('answer_4')}>{props.answer_4}</li>
                
            </ul>
            <button className="next-question">Nästa fråga</button>
        </div>
    )
}
export default Quizcard;