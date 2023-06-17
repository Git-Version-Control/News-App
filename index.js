const category=["Business","Entertainment","General","Health","Science","Sports","Technology"];
const container=document.getElementById('container');
const images=['./images/business.jpg','./images/entertinment.jpg','./images/general.jpg','./images/health.jpg','./images/science.jpg','./images/sports.jpg','./images/technology.jpg']
let image="";



function redirectToLandingPage(categoryValue) {
    const url = `landingPage.html?category=${encodeURIComponent(categoryValue)}`;
    window.location.href = url;
  }
category.forEach(element=>{
    // console.log(category.indexOf(element));
    const h1=document.createElement('h1');
    h1.textContent=element;
    const items=document.createElement('div');
    items.className="item";
    items.style.backgroundImage=`url(${images[category.indexOf(element)]})`;
    items.style.backgroundSize = 'cover'; 
    
    // console.log(images[category.indexOf(element)])
    items.appendChild(h1);
    container.appendChild(items)
    // console.log(container);
    items.addEventListener('click', () => {
        // Set the URL of the new page
        // window.location.href = 'landingPage.html';
        redirectToLandingPage(element.toLowerCase());
        // console.log(element.toLowerCase())
        // fetchData(element.toLowerCase()) // Replace with the desired URL of the new page
      });
})


