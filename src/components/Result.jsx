import React from 'react';

const Result = ({scoreBoard})=>{

    const correct = scoreBoard.filter(answer => answer === true).length;
    const result = (correct / scoreBoard.length ) * 100;
    const message = {
        perfect: 'Du kunde verkligen det här! Bra jobbat!',
        great: 'Wow, vi är impade! Du hade nästan alla rätt!',
        good: 'Bra jobbat! Du hade mer än hälften rätt.',
        moderate: 'Hm, du kanske borde läsa på lite innan du tar det här quizet en gång till. Du kan bättre! =)',
        poor: 'Det här var illa. Du kanske ska prova ett quiz i ett ämne som intresserar dig mer?',
      }
    
    const resultMessage = () => {

        switch (true) {
            case result >= 95:
                return message.perfect;
            case result >= 80:
                return message.great;
            case result > 50:
                return message.good;
            case result >= 20:
                return message.moderate;
                
            default:
                return message.poor;
        }
    }
    
    return(
        <div className="quiz-card">
            <h2>Nu är quizet slut.</h2>
            <p>Du hade {correct} rätt av {scoreBoard.length} möjliga.</p>
            <p>{resultMessage()}</p>
        </div>
    )
}
export default Result;