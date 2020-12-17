import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Quizcard from './Quizcard';

const Quizpage = ()=>{

    const {id} = useParams();

    const [quizInfo, setQuizInfo] = useState(null);
    const [questions, setQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    

    useEffect(()=>{
        const quizUrl = `https://www.peowstudio.com/quizforge/wp-json/quizforge/v1/quiz/${id}`;

        const fetchQuiz = async ()=>{
            await fetch(quizUrl)
                    .then(result => result.json())
                    .then(result=>{
                        console.log(result)
                        setQuizInfo(result[0][0])
                        setQuestions(result[1])
                    })
                    .catch(e => console.error(e));
        }

       
        fetchQuiz();
        
    }, []);

    useEffect(()=>{
        if (questions){setCurrentQuestion(questions[0])}

    }, [questions])

    const checkAnswer = (guess) => {

        let rightAnswer = 'answer_'+currentQuestion.right_answer;

        if (rightAnswer === guess) {
            return true;
        } else {
            return false;
        }

    }


    return(
        <div className="quiz-container">
            <h1>{quizInfo != null ? quizInfo.title : 'Ingen titel'}</h1>
            {currentQuestion != null ? <Quizcard {...currentQuestion} checkAnswer={checkAnswer}/>: null}
        </div>

    )
}
export default Quizpage;