import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
//import ButtonLink from './components';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className='Logo' src={Logo} alt="JACKFLIX logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;