import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Quizcard from './Quizcard';

const Quizpage = ()=>{

    const {id} = useParams();

    const [quizInfo, setQuizInfo] = useState(null);
    const [questions, setQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [scoreBoard, setScoreBoard] = useState([]);
    const [quizLength, setQuizLength] = useState(null);
    

    useEffect(()=>{
        const quizUrl = `https://www.peowstudio.com/quizforge/wp-json/quizforge/v1/quiz/${id}`;

        const fetchQuiz = async ()=>{
            await fetch(quizUrl)
                    .then(result => result.json())
                    .then(result=>{
                        console.log(result)
                        setQuizInfo(result[0][0])
                        setQuestions(result[1])
                        setQuizLength(result[1].length)
                    })
                    .catch(e => console.error(e));
        }

       
        fetchQuiz();
        
    }, [id]);

    useEffect(()=>{
        if (questions){setCurrentQuestion(questions[0])}

    }, [questions])

    const addScore = (guess) => {

        let rightAnswer = currentQuestion.right_answer;

        if ( guess === rightAnswer ) {
            
            setScoreBoard(prevScore =>[...prevScore, true])
            console.log(scoreBoard)

        } else {
            
            setScoreBoard(prevScore =>[...prevScore, false])
            console.log(scoreBoard)

        }

    }


    return(
        <div className="quiz-container">
            <h1>{quizInfo != null ? quizInfo.title : 'Ingen titel'}</h1>
            {currentQuestion != null ? <Quizcard {...currentQuestion} addScore={addScore}/>: null}
        </div>

    )
}
export default Quizpage;