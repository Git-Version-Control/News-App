import {apiKey} from  "../News App/config.js"; 
// const apiKey = require('./apiKeys');
const newsItems=document.getElementById('newsItems');
const heading=document.getElementsByTagName('h1')[0];

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryValue = urlParams.get('category');
  
    if (categoryValue) {
      // Process the category value as needed
    //   console.log("Selected Category:", categoryValue);
      fetchData(categoryValue)
    } else {
      console.error('No category parameter found in the URL.');
    }
  });
   
    async function fetchData(categoryValue) {
    try {
      // console.log(`apikey ${apiKey}`)
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${categoryValue}&apiKey=${apiKey}`);
    //   console.log("response "+response)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      // Process the retrieved data
        //   image=data.articles[0].urlToImage;
        //   console.log(heading);
        heading.textContent=categoryValue.toUpperCase();
        // console.log(categoryValue+" "+data.articles)
        processArticles(data.articles);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the async function
//   fetchData();
function processArticles(articles) {
    // Process the articles data here
    articles.forEach(article => {
        // console.log(articles)
      // Access the properties of each article
      
      const title = article.title;
      const description = article.description;
      const imageUrl = article.urlToImage;
      const url=article.url;
      const publishedDate=article.publishedAt;
        
      const p=document.createElement('p');
      p.textContent="Published Date:"+publishedDate.toLocaleString();
      const h3=document.createElement('h3');
      h3.textContent=title;
      const img=document.createElement('img');
      img.src=imageUrl;
      img.alt=title;
    //   img.style.height="100px";


      const indiviualItem=document.createElement('div');
      indiviualItem.className="indiviualItem";
      indiviualItem.appendChild(img);
      indiviualItem.appendChild(h3);
      indiviualItem.appendChild(p);

      const aTag=document.createElement('a');
      aTag.target="_blank";
      aTag.href=url;
      aTag.appendChild(indiviualItem);

      newsItems.appendChild(aTag);
    });
  }
