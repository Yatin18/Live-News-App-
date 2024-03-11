
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import News from './News';


function App() {
  let [articles,setarticles]=useState([]);
  let[category,setcategory]=useState("india")
  let x=new Date().toLocaleDateString();
  const ar=x.split("/")
   
  ar.reverse();
  const y=ar[0]+"-0"+ar[2]+"-"+ar[1]-1
    
 
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=${y}&apiKey=82cf2ee5cc97465290b237116c554413`)
    .then((response)=>response.json())
    .then((data)=>{
     setarticles(data.articles)
    })
    .catch((e)=>
    {
      console.log(e)
    })
  },[category])

  return (
    <div className="App">
     
     <header className='head'>
    <h1>News App</h1>
    <input type='text'placeholder='Search news' onChange={(e)=>{
      if(e.target.value!="")
      {
        setcategory(e.target.value)
      }
      else
      {
        setcategory("india")
      }
       }}></input>
     </header>
     <section className='container'>
      {
        articles.map((article)=>
        {
          if(article.title !="[Removed]")
          {
            return (
            
              <News article={article}></News>
            )
          }
          
        })
      }
   
     
     </section>
   
    </div>
  );
}

export default App;
