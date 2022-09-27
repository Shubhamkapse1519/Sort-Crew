import Link from 'next/link'
import React, { Fragment } from 'react'
const Navbar = () => {
  return (
    <Fragment>
      <nav>
        <div>
          <Link href="/">SORT CREW</Link>
        </div>
        <div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Projects</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
