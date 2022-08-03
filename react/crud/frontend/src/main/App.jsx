import './App.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Rotas from './Rotas'
import Footer from '../components/template/Footer'


export default props =>
<HashRouter>
       <div className='app'>
        <Logo />
        <Nav />
        <Rotas />
        <Footer />
    </div> 
</HashRouter>


