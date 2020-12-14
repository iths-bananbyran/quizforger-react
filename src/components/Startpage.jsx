import React from 'react';
import { useEffect, useState } from 'react';

const Startpage = ()=>{

    const [homePage, setHomePage] = useState();
    const [heroImg, setHeroImg] = useState('');
    const [latestPosts, setLatestPosts] = useState(null);

    useEffect(()=>{
        const homePageUrl = 'https://www.peowstudio.com/quizforge/wp-json/wp/v2/pages/10?_embed';
        const latestPostsUrl = 'https://www.peowstudio.com/quizforge/wp-json/wp/v2/posts?per_page=6';

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

        fetchHomePage();
        fetchLatestPosts();

    }, []);

    useEffect(()=>{
        if (homePage != null){

            setHeroImg(homePage._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url);
        }
        
    }, [homePage]);


const renderQuizTitles = (post) => {

    let title = post.title.rendered;
    
    return(
        <h2 key={title}>{title}</h2>
    )

}

    return(

        <main className="">
            <div className="hero">
                <h2>Id: {homePage ? homePage.id : 'inte nåt!'}</h2>
                <img src={heroImg ? heroImg : null} alt=""/>
            </div>
            
            <div>{latestPosts !=null ? latestPosts.map(post => renderQuizTitles(post)) : ''}</div>

        </main>
    )
}
export default Startpage;