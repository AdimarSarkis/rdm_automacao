import Cards from '../Cards';
import Footer from '../Footer';
import Header from '../Header';
import './atacarejo.css';
import './selfcheckout.css';

const Selfcheckout = () => {

  const retorno = <p>
    Retorno sobre o investimento (ROI) <strong className='forte'> 09 a 14 </strong>
     meses (média) Caso seja feita a opção de financiamento pelo BNDES esse tempo reduz consideravelmente.
  </p>

  const reduzir = <p>Reduza até
  <strong className='forte'> 30% </strong>
  As filas de atendimento
  Com 04 SelfCheckouts na sua loja é possível atender em média120 a 140 clientes/hora</p>
  
  const ganhe = <p>Ganhe mais de
  <strong className='forte'> 50% </strong>
  de espaço na área de vendas
  Estimule a venda por impulso incrementando a área de venda com mais produtos.</p>
  
  return (
    <>
      <Header />
      <div className='top'></div>
        <p className='title'>
        Uma nova geração de PDV's de Auto-Atendimento que
oferece praticidade e comodidade aos seus clientesApresentamos o SelfCheckout da CISS
        </p>
      <div className='container'>
        <Cards 
          icone="card"
          title="Pagamento em cartão de débito ou Crédito"
        />
        <Cards 
          title="Ideal para compras rápidas de até 15 itens"
        />
        <Cards 
          icone="code"
          title="Processo de compras simples e intuitivo"
        />
        <Cards
        icone="self"
          title="Abertura da venda simplificada"
          body='Basta passar o código de barras do primeiro item no Scanner que processo da venda inicia automaticamente'
        />
        <Cards
          icone="facil"
          title="Fechamento ágil e facilitado"
          body="Com apenas um clique o processo de venda é concluído automaticamente e a forma de pagamento é liberada"
        />
        
      </div>
      <p className="title">Facilidades</p>
      <div className="container-facilidade">
        <Cards
          body={retorno}
        />
        <Cards
          body={reduzir}
        />
        <Cards
          body={ganhe}
        />
      </div>
      <Footer />
    </>
  );
}

export default Selfcheckout;