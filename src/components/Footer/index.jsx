import "./Footer.css"
import {FiFacebook, FiInstagram, FiYoutube} from "react-icons/fi"

const Footer = () => {
  return(
    <div className='footer'>
      <div className='locais'>
        <span><strong>Matriz</strong></span>
        <span> Rua Veneza, 279 - Jardim Europa </span>
        <span>Rio Branco - AC</span>  
        <span>Fone (68) 3227-1305 / 3226-2038</span>
        <span>Email: suporte.ac@automacaordm.com.br</span> 
        <span>ciss-riobranco@ciss.com.br</span>
      </div>
      <div className='locais'>
        <span><strong>Filial</strong></span>
        <span>Manaus - AM</span>  
        <span>Fone (92) 9-9192-2826 / 99365-0996</span>
        <span>Email: suporte.am@automacaordm.com.br</span> 
      </div>
      <div className='social'>
        <a href="https://www.facebook.com/www.automacaordm.com.br/" target="_blank" rel="noopener noreferrer"><FiFacebook/></a>
        <a href="https://instagram.com/rdm_automacao?igshid=YmMyMTA2M2Y= " target="_blank" rel="noopener noreferrer"><FiInstagram/></a>
      </div>
    </div>
  );
}
export default Footer;