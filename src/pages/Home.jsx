import Cards from '../components/Cards/index.jsx';
import ConteudoHome from "../components/ConteudoHome/index.jsx";
import Header from "../components/Header/index.jsx";
import Footer from "../components/Footer/index";
import Modal from '../components/Modal/index.jsx';
const Home = () => {
  const conteudoBody = <p>Das 12:00 as 14:00 horas Trabalhamos em horário de plantão somente atendimentos prioritários como empresa parada, banco de dados, e frente de caixa parado
  Obrigado pela compreensão.</p>
  return (
    <>
      <Header />
      <Modal 
      title="Atenção"
      body={conteudoBody}/>
      <ConteudoHome />
      <Footer />
    </>
  );
};

export default Home;
