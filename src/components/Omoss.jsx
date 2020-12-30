import React from 'react';
import { useEffect, useState } from 'react';

const Omoss = ()=>{

    const [content, setContent] = useState(null);

    useEffect( ()=> {

        const url = 'https://www.peowstudio.com/quizforge/wp-json/wp/v2/pages?slug=contact';

        const fetchContent = async ()=>{
            await fetch(url)
                    .then(result => result.json())
                    .then(result=>{
                        setContent(result)
                    })
                    .catch(e => console.error(e))
        }

        fetchContent();

    }, [])

    console.log(content)
    return(
        <>
        {content && content[0].content.rendered}
        </>
        
    )
}
export default Omoss;