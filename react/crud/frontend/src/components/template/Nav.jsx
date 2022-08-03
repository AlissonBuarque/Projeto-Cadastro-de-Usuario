import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
<aside className='menu-area'>
    <nav className='menu'>
        <Link to='/'>
            <i className='fa fa-home'></i> Home
        </Link>
        <Link to='/event'>
            <i className='fa fa-users'></i> Evento
        </Link>
        <Link to='/cadastr'>
            <i className='fa fa-users'></i> Cadastro
        </Link>
        <Link to='/list'>
            <i className='fa fa-contact'></i> Lista
        </Link>
        <Link to='/info'>
            <i className='fa fa-info'></i> Informações
        </Link>
        <Link to='/sociais'>
            <i className='fa fa-sociais'></i> Redes Sociais
        </Link>
    </nav>
</aside>