import React from 'react';
import logo from '../../Assets/images/logo.png';
import './Menu.css';
import Button from '../Button'

//import ButtonLink from './componentes/ButtonLink';

function Menu(){
    return(
    <nav className="Menu">
        <a href="/">
            <img className="logo" src={logo} alt="AluraFlix logo"></img>
        </a>
        <Button as="a" className="ButtonLink" href="/">
            Novo video
        </Button>
    </nav>
    //tag ButtonLink é refernciada pela função ButtonLink com suas props 
    ); 
}

export default Menu;