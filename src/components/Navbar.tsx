import React from 'react'

const Navbar: React.FC = () => {

  return (
    <nav>
    <div className="nav-wrapper blue-grey lighten-1 px1">
      <a href="/" className="brand-logo">React + TS</a>
      <ul  className="right hide-on-med-and-down">
        <li><a href="/">Todo list</a></li>
        <li><a href="/">Info</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar