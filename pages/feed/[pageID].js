import React from 'react'
import { useRouter } from 'next/router';
import Header from '../../components/Header';



const Feed = ({pageNumber, articles}) => {
    console.log(articles,pageNumber);
    const router= useRouter();
    return (
        <>
        <Header />
        <div className='flex flex-col justify-center divide-y-4 divide-gray-800 items-center'>
           {articles.map((article,index)=>(
               <div onClick={()=> (window.location.href=article.url)} key={index} className=' mb-10 cursor-pointer max-w-lg p-5'>
                <h1  className='p-5  text-xl font-bold font-serif text-gray-800'>{article.title}</h1>
                {!!article.urlToImage&& <img src={article.urlToImage} className='p-5 w-full rounded' />}
                <p className='p-5 text-sm text-gray-500 font-semibold '>{article.description}</p>
                
               </div>

           ))}
        </div>
        
        <div className='flex justify-center space-x-16 items-center px-8 mb-10 text-gray-800 font-semibold'>
         <div onClick={()=> {
             if(pageNumber >1){
                router.push(`/feed/${pageNumber-1}`).then(()=> window.scrollTo(0,0));
             }
         }}
         className={pageNumber === 1 ?' cursor-not-allowed opacity-50 rounded-full bg-blue-500 px-4 py-2 text-white text-sm uppercase' : 'cursor-pointer rounded-full bg-blue-500 px-4 py-2 text-white text-sm uppercase'}>
            back
         </div>
         <div className='rounded-full bg-green-600 text-white px-3 py-1' >{pageNumber}</div>
         <div onClick={()=> {
             if(pageNumber <5){
                router.push(`/feed/${pageNumber + 1}`).then(()=> window.scrollTo(0,0));
             }
         }}
         className={pageNumber === 5 ?' cursor-not-allowed opacity-50 rounded-full bg-blue-500 px-4 py-2 text-white text-sm uppercase' : 'cursor-pointer rounded-full bg-blue-500 px-4 py-2 text-white text-sm uppercase'}>
            Next 
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
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}&apiKey=YOUR_API_KEY`);
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


