





    const allMoviesCont = document.getElementById('all-movies')
// const filterMoviesCont = document.getElementById('filter-movies')
// filterMoviesCont.style.border= 'red 2px solid'
// const searchBox = document.getElementById('searchbox')
// console.log(allMoviesCont, searchBox)
const movieArray= [
    { 
        image: "/images/nigeria.jpg",
        name:'nigeria',
        continent:'africa',
       
},
{
        image:'/images/gahna.jpg',
        name:'gahna',
        continent:'africa',
},
       
{ 
        image:'/images/tanzania.jpg',
        name:'tanzania',
        continent:'africa'
       
},
{
    image:'/images/tunisia.jpg',
    name:'tunisia',
    continent:'africa'
},
{
    image:'/images/cote-divoire.png',
    name:'senega',
    continent:'africa'
},
{
    image:'/images/south-africa.png',
    name:'south africa',
    continent:'africa'
},

{
    image:'/images/kenya.jpg',
    name:'kenya',
    continent:'africa'
},
{
    image:'/images/cote-divoire.png',
    name:'angola',
    continent:'africa'
},
{
    image:'/images/algeria.png',
    name:'algeria',
    continent:'africa'
},
{
    image:'/images/',
    name:'egypt',
    continent:'africa'
},
{
    image:'/images/libya.jpg',
    name:'libya',
    continent:'africa'
},
{
    image:'/images/zimbabwe.jpg',
    name:'zimbabwe',
    continent:'africa'
},


{
    image:'/images/cote-divoire.png',
    name:'benin',
    continent:'africa'
},
{
    image:'/images/botswana.png',
    name:'botswana',
    continent:'africa'
},
{
    image:'/images/cote-divoire.png',
    name:'cote dlvoire',
    continent:'africa'
},
{
    image:'/images/gabon.png',
    name:'gabon',
    continent:'africa'
},
{
    image:'',
    name:'liberia',
    continent:'africa'
},
{
    image:'/images/rwanda.png',
    name:'rwanda',
    continent:'africa'
},
{
    image:'/images/uganda.png',
    name:'uganda',
    continent:'africa'
},
{
    image:'/images/chad.png',
    name:'chad',
    continent:'africa'
},
{
    image:'/images/tunisia.jpg',
    name:'tunisia',
    continent:'africa'
},{
    image:'/images/cote-divoire.png',
    name:'the gambia',
    continent:'africa'
},
{
    image:'/images/cote-divoire.png',
    name:'zambia',
    continent:'africa'
},{
    image:'/images/burkina-faso.png',
    name:'burkina faso',
    continent:'africa'
},
{
    image:'/images/angola.png',
    name:'angola',
    continent:'africa'
},
{
    image:'/images/cameroon.jpg',
    name:'cameroon',
    continent:'africa'
},
{
    image:'/images/cote-divoire.png',
    name:'mail',
    continent:'africa'
},




    
  ];
   



const displayAllMovies =()=>{
    movieArray.map((movie)=>{
        const movieCard = document.createElement('div')
        allMoviesCont.appendChild(movieCard)
        const movieImage = document.createElement('img')
        movieImage.style.width = '300px'
        movieImage.setAttribute('src', movie.image)
        const moviename = document.createElement('h3')
        moviename.innerText = movie.name
        const moviecontinent = document.createElement('p')
        moviecontinent.innerText = movie.continent
        movieCard.appendChild(movieImage)
        movieCard.appendChild(moviename)
        movieCard.appendChild(moviecontinent)
    })
}



displayAllMovies()