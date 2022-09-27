import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Section1 from '../screens/section-1'
import Section2 from '../screens/section-2'
import Section3 from '../screens/section-3'
import Section4 from '../screens/section-4'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={'true'}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&family=Ubuntu&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </main>
    </Fragment>
  )
}

export default Home
