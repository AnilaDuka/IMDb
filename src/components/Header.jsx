import React from 'react'
import Nav from './Nav'

function Header() {
  return (
    <header>
      <div className='container-row'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' alt='logo'/>
        <Nav />
      </div>
    </header>
  )
}

export default Header