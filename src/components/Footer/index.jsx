import "./Footer.css"
import {FiFacebook, FiInstagram, FiLogIn, FiEdit3} from "react-icons/fi"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './../Modal/index.jsx';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../backend';
import { openModal } from '../Modal'
import '../Modal/Modal.css';
import ReactModal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";

const Footer = () => {
  const [isLoged, setIsLoged] = useState(false); 
 

  const [modalIsOpenLogin, setIsOpenLogin] = useState(false);

  const openModalLogin = () => setIsOpenLogin(true);
  const closeModalLogin = () => setIsOpenLogin(false);


  const contentLogin =  
  <div className='container-content'>
    <form action="">
      <div class="inputBox">
          <input type="email" name="" required="required" 
            onChange={(e) => setEmail(e.target.value)} />
          <span>Email</span>
          <i></i>
      </div>
      <div class="inputBox">
          <input type="password" name="" required="required" 
          onChange={(e) => setPassword(e.target.value)} />
          <span>Senha</span>
          <i></i>
      </div>
      <div class="inputBox">
          <button 
            onClick={(e) => {
              e.preventDefault();
              signInWithEmailAndPassword(email, password);
              closeModalLogin;
            }
          }>
            Entrar
          </button>
      </div>
    </form>
  </div>

  const [modalIsOpenEdit, setIsOpenEdit] = useState(false);

  const openModalEdit = () => setIsOpenEdit(true);
  const closeModalEdit = () => setIsOpenEdit(false);

  const contentEdit =  
  <div className='container-content'>
    <form action="">
      <div class="inputBox">
          <textarea type="text" name="" required="required" placeholder='Escreva a sua mensagem...'
            onChange={(e) => {
              const mensagem = (e.target.value);
          
              }
            } />
          
          <i></i>
      </div>
      <div class="inputBox">
          <input type="datetime-local" name="" required="required" 
          onChange={(e) => {
            const dataInicio = (e.target.value);
            }
          } />
          <span id="dataInicio">Escolha a data do inicio do aviso</span>
          <i></i>
      </div>
      <div class="inputBox">
          <input type="datetime-local" name="" required="required" 
          onChange={(e) => {
            const dataFinal = (e.target.value);
            
            }
          } />
          <span id="dataInicio">Escolha a data do final do aviso</span>
          <i></i>
      </div>
      <div class="inputBox">
          <button 
            onClick={(e) => {
              
            }
          }>
            Selecionar
          </button>
      </div>
    </form>
  </div>




  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  
  return(
    <>
    <div className="Container">
      <ReactModal 
        isOpen={modalIsOpenLogin}
        onRequestClose={closeModalLogin}
        contentLabel='exemple modal'
        overlayClassName='modal-overlay'
        className="modal-content"
        ariaHideApp={false}
      >
        <div className="container">
          <AiOutlineClose className="btn-close" onClick={closeModalLogin}/>
          <h1>Login</h1>
          {contentLogin}
        </div>
      </ReactModal>
  </div>

    <div className="Container">
      <ReactModal 
        isOpen={modalIsOpenEdit}
        onRequestClose={closeModalEdit}
        contentLabel='exemple modal'
        overlayClassName='modal-overlay'
        className="modal-content"
        ariaHideApp={false}
      >
        <div className="container">
          <AiOutlineClose className="btn-close" onClick={closeModalEdit}/>
          <h1>Edit</h1>
          {contentEdit}
        </div>
      </ReactModal>
  </div>


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
        
        {isLoged ? 
        <a className='click' onClick={openModalEdit}>
          <FiEdit3/>
        </a> 
        : 
        <a className='click' onClick={openModalLogin}>
          <FiLogIn/>
        </a> 
        }      
      </div>
    </div>
    </>
  );
}
export default Footer;
