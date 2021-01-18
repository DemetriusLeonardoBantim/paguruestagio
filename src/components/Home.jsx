import React from 'react'
import './Home.css'
import logo from '../assets/paguru.svg'

import Header from './header'
import Footer from './footer'

const Home = () => {
 return(
  <div className="page-content">
   <Header/>
    <div className="content">
     <h1>Paguru - Solucões digitais</h1>
     <p>Nosso plataforma porporciona um progresso exponencial na comunicação interna.</p>
    </div>
   <Footer/>
  </div>
 )
}

export default Home