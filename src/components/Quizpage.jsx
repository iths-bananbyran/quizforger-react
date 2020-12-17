import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Quizpage = ()=>{

    const {id} = useParams();

    const [quizInfo, setQuizInfo] = useState(null);
    const [questions, setQuestions] = useState(null);
    

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


    return(
        <div className="quiz-container">
            <p>Hej syns jag?</p>
            <h1>{quizInfo != null ? quizInfo.title : 'Ingen titel'}</h1>
            <p>{quizInfo != null ? quizInfo.quiz_id : 'Inget id'}</p>
            <p>{questions != null ? questions[0].question : 'Här skulle fråga stått'}</p>
        </div>

    )
}
export default Quizpage;