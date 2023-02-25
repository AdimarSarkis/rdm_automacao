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
      <a href="#" className="brand">
        <img src={logo} alt="logo" />
      </a>
      <div className={`menu-btn ${isOn ? "active" : ""}`} onClick={buttonClicked}></div>
      <div className={`navigation ${isOn ? "active" : ""}`}>
        <div className="navigation-items">
          <a href="#">Inicio</a>
          <a href="#">Sobre nós</a>
          <a href="#">Downloads</a>
          <a href="#">Sistemas</a>
          <a href="#">Suporte Online</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
