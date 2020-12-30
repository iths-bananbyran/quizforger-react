import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Allaquiz = ()=>{

    const [allQuizes, setAllQuizes] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect( ()=> {

        const quizUrl = 'https://www.peowstudio.com/quizforge/wp-json/quizforge/v1/quizposts/all';

        const fetchQuizes = async ()=>{
            await fetch(quizUrl)
                    .then(result => result.json())
                    .then(result=>{
                        setAllQuizes(result)
                        setCategories(collectCategories(result))
                    })
                    .catch(e => console.error(e))
        }

        fetchQuizes();

    }, [])

    const collectCategories = (list) => {
        return list.reduce((previous, current) => {
           if(!previous.find((prevItem) =>{
               return prevItem === current.quiz_category[0].name;
           })) {
              previous.push(current.quiz_category[0].name);
           }
           return previous;
       }, []);
      }


    return(
        <div>
            <h2>Alla quiz</h2>
            {categories && categories.map(cat => {
                console.log(cat)
                let result = allQuizes.filter(quiz => quiz.quiz_category[0].name === cat);
                console.log(result)
                return(
                    
                    <>
                    <h3>{cat}</h3>
                    {result.map((quiz, i) => {
                        return (

                            <Link key={quiz.quiz_title+i} to={{
                                pathname: `/quiz/${quiz.quiz_id}`,
                            }}>
                                <h4 key={quiz.quiz_title}>{quiz.quiz_title}</h4>
                            </Link>
                        )
                    })}
                    </>
                )
            })}
        </div>

    )
}
export default Allaquiz;