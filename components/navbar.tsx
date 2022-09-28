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
            <li><a href='#services'>Services</a></li>
            <li><a href='#contact'> Contact</a></li>
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
