import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>
    </>
  )
}

export default Header