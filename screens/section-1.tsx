import React, { Fragment } from 'react'
import Image from 'next/image'
import PlaneIcon from '../components/svg/plane'
const Section1 = () => {
  return (
    <Fragment>
      <div className="hero-wrapper mb-10">
        <div className="hero-heading sub-heading">
          <p className="label">A trusted digital agency</p>
          <h1>Quality digital services you really want!</h1>
          <div className="flex">
            <button className="button pill-button bg-blue mr-2">
              Services
            </button>
            <button className="button circle-button bg-green">
              <PlaneIcon width="1.2rem" height="1.2rem" color="red" />
            </button>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/girl-pointing.png"
            alt="girl-pointing-to-webservices"
            layout="fill"
            objectFit="contain"
            className="hero-img-girl"
          />
        </div>
      </div>
    </Fragment>
  )
}

export default Section1
