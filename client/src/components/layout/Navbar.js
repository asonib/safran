import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar bg-dark">
      <h1>
        <a href="/"><i class="fas fa-code"></i> Safran Test</a>
      </h1>
      <ul>
        {/* <li><a href="profiles.html">Developers</a></li> */}
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
    )
}


export default Navbar;