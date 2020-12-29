import React from 'react';

const Result = ({scoreBoard})=>{

    const correct = scoreBoard.filter(answer => answer === true).length;
    
    return(
        <div className="quiz-card">
            <h2>Nu är quizet slut.</h2>
            <p>Du hade {correct} rätt av {scoreBoard.length} möjliga.</p>
        </div>
    )
}
export default Result;