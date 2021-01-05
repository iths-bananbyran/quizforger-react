import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Allaquiz.scss';


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
    
    const renderCatCard = (category, quizList) => {
        // console.log(quizList)
        // quizList.sort((a,b) => a.quiz_title - b.quiz_title);

        return(
                
                <article key={category} className='qf-category-card'> 
                    <h3>{category.replace(/&amp;/g, '&')}</h3>
                    <hr/>
                    {quizList.map((quiz, i) => {
                        let title = quiz.quiz_title;
                        let id = quiz.quiz_id;
                        let thumbnail = quiz.quiz_thumbnail;

                        return (

                            <Link key={title+i} to={{
                                pathname: `/quiz/${id}`,
                            }}>
                                <div className="qf-list-item-wrapper">
                                    <figure>
                                        <img src={thumbnail} alt={title}/>
                                    </figure>
                                    <h4 key={title}>{title}</h4>
                                </div>
                            </Link>
                        )
                    })}
                </article>
        )
    }


    return(
        <main className='qf-main'>
            <div className='hero'>
                <h1>Alla quiz</h1>
            </div>
            <div className='qf-card-container'>
                {categories && categories.sort().map(cat => {
                    let result = allQuizes.filter(quiz => quiz.quiz_category[0].name === cat);
                    return renderCatCard(cat, result);
                })}
            </div>
        </main>

    )
}
export default Allaquiz;