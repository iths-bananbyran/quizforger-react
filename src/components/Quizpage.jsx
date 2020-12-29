import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Quizcard from './Quizcard';
import Result from './Result';

const Quizpage = ()=>{

    const {id} = useParams();

    const [quizInfo, setQuizInfo] = useState(null);
    const [questions, setQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [scoreBoard, setScoreBoard] = useState([]);
    const [quizLength, setQuizLength] = useState(null);
    const [legend, setLegend] = useState({});
    const [finished, setFinished] = useState(false);
    const [lastQuestion, setLastQuestion] = useState(false);
    

    useEffect(()=>{
        const quizUrl = `https://www.peowstudio.com/quizforge/wp-json/quizforge/v1/quiz/${id}`;

        const fetchQuiz = async ()=>{
            await fetch(quizUrl)
                    .then(result => result.json())
                    .then(result=>{
                        setQuizInfo(result[0][0])
                        setQuestions(result[1])
                        setQuizLength(result[1].length)
                        setLegend({question: 1, length: result[1].length})
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

        } else {
            
            setScoreBoard(prevScore =>[...prevScore, false])

        }

    }

    const nextQuestion = () => {
        if(scoreBoard.length < quizLength){

            setCurrentQuestion(questions[scoreBoard.length])
            setLegend({question: scoreBoard.length+1, length: quizLength})

            if (scoreBoard.length === quizLength -1) {
                setLastQuestion(true);
            }
        } else {
            setFinished(true);
        }
    }


    return(
        <div className="quiz-container">
        {!finished ?
            <div>
                <h1>{quizInfo != null ? quizInfo.title : 'Ingen titel'}</h1>
                {currentQuestion != null ? <Quizcard {...currentQuestion} legend={legend} addScore={addScore} lastQuestion={lastQuestion} setNextQuestion={nextQuestion}/>: null}
            </div>
            :
            <div>
                <Result scoreBoard={scoreBoard}/>
            </div>}
        </div>

    )
}
export default Quizpage;