import Cards from '../Cards';
import Footer from '../Footer';
import Header from '../Header';
import './atacarejo.css';

const Selfcheckout = () => {
  return (
    <>
      <Header />
      <div className='top'></div>
        <p className='title'>Conheça as facilidades e recursos</p>
      <div className='container'>
        <Cards 
          icone="desc"
          title="Variedade de Descontos"
          body={'variedadeDescontos'}
        />
        <Cards 
          title="Critérios de Desconto"
          body={'criterios_de_Desconto'}
        />
        <Cards 
          title="Manutenção de Critérios de Desconto"
          body={'manutencao'}
        />
        <Cards
          icone="graf"
          title="Relatórios"
          body={'relatorio'}
        />
      </div>
      <p className="title">Facilidades</p>
      <div className="container-facilidade">
        <Cards
          icone="planilha"
          title="FORMAÇÃO DE PREÇOS"
          body={'formacao'}
        />
        <Cards
          icone="graf"
          title="Relatórios Gerenciais"
          body={"a"}
        />
        <Cards
          title="EDITOR DE ETIQUETAS"
          body={'etiquetas'}
        />
      </div>
      <Footer />
    </>
  );
}

export default Selfcheckout;