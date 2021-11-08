import React from 'react'
import './styleHome.css'
import Header from '../../components/Header'

const Home = () => {
    return (
        <div>
          <Header/>
        <body>
        <main className='main'>
          <div className='navbar'> navbar </div>
          <div className='feed'> feed </div>
        </main>
        </body>

        </div>
    )
}

export default Home
