import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className='container-row'>
        <Link to="/">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' alt='logo'/>
        </Link>
        <Nav />
      </div>
    </header>
  )
}

export default Header