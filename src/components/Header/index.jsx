import logo from "../../assets/LOGO.png";
import close from "../../assets/close.png";
import menu from "../../assets/menu.png";
import './header.css';
import { useState } from 'react';
const Header = () => {
  const [isOn, setIsOn] = useState(false);

  const buttonClicked = () => {
    if(isOn){
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  }


  return (
    <header>
      <a href="/home" className="brand">
        <img src={logo} alt="logo" />
      </a>
      <div className={`menu-btn ${isOn ? "active" : ""}`} onClick={buttonClicked}></div>
      <div className={`navigation ${isOn ? "active" : ""}`}>
        <div className="navigation-items">
          <a href="./home">Inicio</a>
          <a href="./sobrenos">Sobre nós</a>
          <a href="./downloads">Downloads</a>
          <a href="./sistemas">Sistemas</a>
          <a href="./contato">Contato</a>
          <a href="https://servidorseguro.mysuite1.com.br/client/chatan.php?h=&inf=&lfa=&sl=rda">Suporte Online</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
