import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../Assets/images/logo.png';
import './Menu.css';
import Button from '../Button'

//import ButtonLink from './componentes/ButtonLink';

function Menu(){
    return(
    <nav className="Menu">
        <Link to="/">
            <img className="logo" src={logo} alt="AluraFlix logo"></img>
        </Link>
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo video
        </Button>
    </nav>
    //tag ButtonLink é refernciada pela função ButtonLink com suas props 
    ); 
}

export default Menu;