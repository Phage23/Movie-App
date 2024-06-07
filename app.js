const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
  const form = document.getElementById ('form')
  const search = document.getElementById('search')
  const main = document.getElementById('main')

  const empty = document.querySelector('.empty')
  //console.log(form, search, main);
  empty.style.display = 'none';
 
  main.innerHTML = '';
  async function getMovies(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if(data.results.length >= 1){
      displayMovies(data.results);
    }else{
      empty.style.display = 'block';
    }
    
  }
  getMovies(API_URL)
  
  function displayMovies(movies) {
    main.innerHTML = "";

    movies.forEach((movie) => {
      const{title, poster_path, vote_average, overview } = movie

      const movieDiv = document.createElement('div')
      movieDiv.classList.add('movie')
      movieDiv.innerHTML = `
      <img src= "${IMG_PATH +poster_path} allt ="${title}>
      
        <div class= 'movie-info'>
          <h3> ${title}</h3>
          <span class= "${checkVoteClass}" >${vote_average}</span>
        </div>
        <div class='overview'>
          <h3>Overview</h3>
          ${overview}
        </div>
      `;
      main.appendChild(movieDiv);
    });
  }

  function checkVoteClass(vote){
    if(vote > 8){
      return 'green'
    }else if (vote > 5){
      return 'orange' 
      }else{
        return 'red';
    }
  }

//search functionality
  const hiddenSearch = document.querySelector("hiddenSeacrch");
  const span = document.querySelector("hidden-search.span");

  form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const searchValue = search.Value.trim();
    console.log(searchValue);
    hiddenSearch.computedStyleMap.display = "block";
    span.textContent = searchValue;
    if(searchValue){
      hiddenSearch.computedStyleMap.display = "block";
    span.textContent = searchValue;
      getMovies(SEARCH_API + searchValue);
      search.value= "";
    }else{
      
      window.location.reload();
    }
    
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Phage23/Movie-App.git
git push -u origin main


  });