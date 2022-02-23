import Head from 'next/head'
import React from 'react'
import Nav from './nav'

const Layout = ({children}) => {
  return (
    <div className='container'>
      <Head>
        <title>Hasan </title>t
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        <Nav />
        <main>
            {children}
        </main>
        <footer>
            build by Hasan
        </footer>
    </div>
  )
}

export default Layout