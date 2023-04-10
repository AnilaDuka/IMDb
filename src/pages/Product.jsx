import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'

function displayMovie(movie) {
  return <>
  <div className='product-image'>
    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title}/>
  </div>
  <div className='product-details'>
      <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
          <table>
            <tr>
              <td>Release date</td>
              <td>{movie.release_date}</td>
            </tr>
            <tr>
              <td>Spoken languages</td>
              <td>{movie.spoken_languages && movie.spoken_languages.map(lang => <span className='badge' key={lang.iso_639_1}>{lang.english_name}</span>)}</td>
            </tr>
            <tr>
              <td>Genre</td>
              <td>{movie.vote_average}</td>
            </tr>
          </table>
          <br /> <br />
          <h4>Price: {(movie.id / 10000).toFixed(2)} &euro;</h4>
          <form className='add-to-cart'>
            <input type='number' min="0" max="10" />
            <button type='submit'>Add to cart</button>
          </form>
    </div>
  </>
}

function Product() {
  const {id} = useParams()
  const [movie, setMovie] = useState()
  const API_KEY = 'api_key=3e52e2f5350ae60de5e2fc58e818d2a0'
  const BASE_URL = 'https://api.themoviedb.org/3'
  const API_URL = `${BASE_URL}/movie/${id}?${API_KEY}`

  useEffect(() => {
    axios.get(API_URL)
    .then(resp => setMovie(resp.data))
    .catch(e => console.log(e))
  })

  return <>
    <Header />
      <div className='view-product p-60'>
        <div className='container-row'>
          {movie && displayMovie(movie)}
        </div>
      </div>
      <Footer />
  </>

  
}

export default Product