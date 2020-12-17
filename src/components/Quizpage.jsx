import React from 'react';
import { useEffect, useState } from 'react';

const Quizpage = ()=>{

    const [quizInfo, setQuizInfo] = useState([]);
    const [questions, setQuestions] = useState([]);
    

    useEffect(()=>{
        const id = 6;
        const quizUrl = `https://www.peowstudio.com/quizforge/wp-json/quizforge/v1/quiz/${id}`;

        const fetchQuiz = async ()=>{
            await fetch(quizUrl)
                    .then(result => result.json())
                    .then(result=>setQuizInfo(result[0]))
                    .then(result=>setQuestions(result[1]))
                    .catch(e => console.error(e));
        }

       
        fetchQuiz();

    }, []);


    return(
        <div className="quiz-container">
            <h1>{quizInfo ? quizInfo.title : 'Ingen titel'}</h1>
            <p>{quizInfo ? quizInfo.id : 'Inget id'}</p>
        </div>

    )
}
export default Quizpage;