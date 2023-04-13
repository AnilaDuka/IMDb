import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    setCartTotal(localStorage.getItem('cart') === null ? 0 : JSON.parse(localStorage.getItem('cart')).length)
  }, [])

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart ({cartTotal})</Link></li>
      </ul>
    </nav>
  )
}

export default Nav