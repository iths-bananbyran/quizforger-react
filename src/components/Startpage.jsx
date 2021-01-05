import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Startpage.scss';

const Startpage = ()=>{

    const [homePage, setHomePage] = useState();
    const [siteDescription, setSiteDescription] = useState();
    // const [heroImg, setHeroImg] = useState('');
    const [latestPosts, setLatestPosts] = useState(null);

    useEffect(()=>{
        const homePageUrl = 'https://www.peowstudio.com/quizforge/wp-json/wp/v2/pages/10?_embed';
        const latestPostsUrl = 'https://www.peowstudio.com/quizforge/wp-json/quizforge/v1/quizposts/6';
        const siteDescriptionUrl = 'https://www.peowstudio.com/quizforge/wp-json/';

        const fetchHomePage = async ()=>{
            await fetch(homePageUrl)
                    .then(result => result.json())
                    .then(result=>setHomePage(result))
                    .catch(e => console.error(e));
        }

        const fetchLatestPosts = async ()=>{
            await fetch(latestPostsUrl)
                    .then(result => result.json())
                    .then(result=>setLatestPosts(result))
                    .catch(e => console.error(e));
        }

        const fetchSiteDescription = async ()=>{
            await fetch(siteDescriptionUrl)
                    .then(result => result.json())
                    .then(result=>setSiteDescription(result))
                    .catch(e => console.error(e));
        }

        fetchHomePage();
        fetchLatestPosts();
        fetchSiteDescription();

    }, []);

    // useEffect(()=>{
    //     if (homePage != null){

    //         setHeroImg(homePage._embedded["wp:featuredmedia"][0].media_details.sizes["1536x1536"].source_url);
    //     }
        
    // }, [homePage]);


const renderQuizTitles = (post) => {

    let title = post.quiz_title;
    let thumbnail = post.quiz_thumbnail;
    let id = post.quiz_id;
    let category = post.quiz_category[0].name.replace(/&amp;/g, '&');
    
    return(
        <Link key={title} to={{
            pathname: `/quiz/${id}`,
        }}>
            <article className='qf-card'>
                <figure>
                    <img src={thumbnail} alt={title}/>
                </figure>
                <h3>{title}</h3>
                <span>{category}</span>
            </article>
        </Link>

    )

}

    return(

        <main className="qf-main">
            <div className="qf-hero">
                <h1>{homePage ? homePage.title.rendered : 'Laddar ...'}</h1>
                <h2>{siteDescription && siteDescription.description}</h2>
            </div>
            <div className="qf-divider">
                <h3>Senast skapade quiz</h3>
                <hr/>
            </div>
            <div className='qf-card-container'>
                {latestPosts !=null ? latestPosts.map(post => renderQuizTitles(post)) : ''}
            </div>

        </main>
    )
}
export default Startpage;