import logo from "../../assets/LOGO.png";
import close from "../../assets/close.png";
import menu from "../../assets/menu.png";
import './header.css';
import { useState } from 'react';
import { Link } from 'react-dom';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const [isOn, setIsOn] = useState(false);

  const buttonClicked = () => {
    if(isOn){
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  }

  const navigate = useNavigate();

  const HandlerClick = (props) => {
    navigate(`/${props}`);
  }

  return (
    <header>
      <a href="/home" className="brand">
        <img src={logo} alt="logo" />
      </a>
      <div className={`menu-btn ${isOn ? "active" : ""}`} onClick={buttonClicked}></div>
      <div className={`navigation ${isOn ? "active" : ""}`}>
        <div className="navigation-items">
          {/*<a href="/home">Inicio</a>
          <a href="/sobrenos">Sobre nós</a>
          <a href="/downloads">Downloads</a>
          <a href="/sistemas">Sistemas</a>
          <a href="/contato">Contato</a>*/}
          <a onClick={() => HandlerClick('home')}>Inicio</a>
          <a onClick={() => HandlerClick('sobrenos')}>Sobre nós</a>
          <a onClick={() => HandlerClick('downloads')}>Downloads</a>
          <a onClick={() => HandlerClick('sistemas')}>Sistemas</a>
          <a onClick={() => HandlerClick('contato')}>Contato</a>
          <a href="https://servidorseguro.mysuite1.com.br/client/chatan.php?h=&inf=&lfa=&sl=rda">Suporte Online</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
