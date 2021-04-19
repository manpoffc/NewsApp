import React from 'react'

const Feed = ({pageNumber, articles}) => {
    console.log(articles,pageNumber);
  
    return (
        <>
        <div className='flex flex-col justify-center divide-y-4 divide-gray-800 items-center'>
           {articles.map((article,index)=>(
               <div key={index} className=' mb-10 max-w-lg p-5'>
                <h1 className='p-5 text-xl font-semibold text-gray-800 mb-5'>{article.title}</h1>
                {!!article.urlToImage&& <img src={article.urlToImage} className=' w-full rounded' />}
                <p className='p-5 text-sm text-gray-800'>{article.description}</p>
                
               </div>

           ))}
        </div>
        <div>
            <div >

            </div>
        </div>
        </>
    )
}

export const getServerSideProps =async pageContext =>{
    const pageNumber = pageContext.query.pageID;

    if(!pageNumber || pageNumber<1 || pageNumber >6){
        return{
            props:{
                articles:[],
                pageNumber:1,
            }
        }
    }

    const apiResponse =await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}&apiKey=925a6333d5c74c87bcb2aa4c9ca19f33`);
    const apiJson = await apiResponse.json();

        const { articles } =apiJson;

        return{
            props: {
                articles,
                pageNumber: Number.parseInt(pageNumber)
            }
        }



};



export default Feed


