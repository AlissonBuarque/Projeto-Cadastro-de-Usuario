import './Nav.css'
import React from 'react'

export default props =>
<aside className='menu-area'>
    <nav className='menu'>
        <a href='#/'>
            <i className='fa fa-home'></i> Home
        </a>
        <a href='#/event'>
            <i className='fa fa-users'></i> Evento
        </a>
        <a href='#/cadastr'>
            <i className='fa fa-users'></i> Cadastro
        </a>
        <a href='#/list'>
            <i className='fa fa-contact'></i> Lista
        </a>
        <a href='#/info'>
            <i className='fa fa-info'></i> Informações
        </a>
        <a href='#/sociais'>
            <i className='fa fa-sociais'></i> Redes Sociais
        </a>
    </nav>
</aside>