import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

const container = document.querySelector('.container')
const title = document.querySelector('.title')
const description = document.querySelector('.description')
const image = document.getElementById('imgMovie')
const btn = document.querySelector('.btn')
const loading = document.querySelector('.loading-container')

btn.addEventListener('click', encontrar)

btn.addEventListener('click', () => {
  container.style.display = 'flex'
})




function encontrar() {

  let num = Math.floor(Math.random() * (996 - 62 + 1)) + 62;
  const url = `https://api.themoviedb.org/3/movie/${num}?api_key=9d247e9b8bbb5f85a4fdad4edbb99d31`
  loading.style.display = 'flex'
  console.log(url);


  setTimeout(() =>  fetch(url)
  .then(response => response.json())
  .then(data => {if(data.success === false) {
    title.innerHTML = 'Ops !!' 
    description.innerHTML = 'We seem to have encountered an error in the search. Please try again !!'
    loading.style.display = 'none'
    image.src = './image/error.png'
  } else {
    {
      image.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
      title.innerHTML = data.original_title
      description.innerHTML = data.overview
      loading.style.display = 'none'
    }
  }
})
  .catch(error => console.log(error))
  ,1000)
}

