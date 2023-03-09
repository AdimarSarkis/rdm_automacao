import Cards from '../Cards';
import Footer from '../Footer';
import Header from '../Header';
import './atacarejo.css';
import './cissbox.css'
const CissBox = () => {

  const reduzirFilas = <p>A combinação CISSBox e CISSLivePDV formam um conjunto
     poderoso desenvolvido especialmente para tornar o processo de venda no PDV 
     muito mais rápido e eficiente. Além de diminuir o tempo de espera no
     atendimento, o equipamento não para de funcionar, mesmo se estiver sem 
     comunicação com o servidor
  </p>

  const produtividade = <p>Com o CISSBox os operadores de caixa têm acesso 
    somente às funcionalidades inerentes à operação do checkout, diminuindo 
    riscos e tornando o processo de inicialização e fechamento de caixa muito 
    mais ágeis
  </p>

  const economiaEnergia = <p>
    O CISSBox foi desenvolvido para atender todos os requisitos de uma frente 
    de caixa de alta performance, utilizando apenas 10% da energia consumida 
    por um computador convencional. Uma economia que impacta diretamente no 
    faturamento da sua loja
  </p>
  return(
    <>
      <Header />
      <div className='top'></div>
        <p className='title'>
        Um PDV pequeno no tamanho, gigante nos recursos
        </p>
      <div className='container'>
        <Cards 
          icone="code"
          title="Acabe com falhas no sistema do checkout e reduza filas"
          body={reduzirFilas}
        />
        <Cards 
          icone="champ"
          title="Aumente a produtividade da sua equipe"
          body={produtividade}
        />
        <Cards 
          icone="thunder"
          title="Economize até 90%* do consumo de energia elétrica no PDV"
          body={economiaEnergia}
        />
        <Cards
          title="Ganhe mais espaço na área de venda"
          body='Compacto e portátil, o CISSBox é um PDV console que cabe na palma da mão. Economizando espaço físico nos checkouts, você tem mais oportunidades para estimular a venda por impulso incrementando a área de venda com produtos.'
        />
        
        
      </div>
      <button id='saibamais'><a href="https://ciss.com.br/cissbox" target="_blank" id='mais'>Conheça mais</a></button>
      <Footer />
    </>
  );
}

export default CissBox;