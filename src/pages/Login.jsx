import Modal from "../components/Modal";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { auth } from '../backend';
import "../styles/login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
  

  const content =  
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
              navigate(`/`);
            }
          }>
            Entrar
          </button>
      </div>
    </form>
  </div>
  return (
    <Modal 
      title="Login"
      body={content}  
    />
  );
}

export default Login;