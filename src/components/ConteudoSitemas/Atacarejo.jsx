import Cards from '../Cards';
import Footer from '../Footer';
import Header from '../Header';
import './atacarejo.css';

const Atacarejo = () => {
  const variedadeDescontos = <p>(Por quantidade e empresa)
  Crie várias opções para oferecer descontos por quantidade de produtos.</p>

  const criterios_de_Desconto = <p>Permite criar critérios de desconto com parâmetros
     de <strong>"A partir de"</strong> e <strong>"A cada"</strong> flexibilizando os descontos conforme necessidade do cliente. </p>
  
  const manutencao = <p>Controle os Critérios de Desconto na Simulação de Preços e na Alteração Individual. </p>
  
  const relatorio = <p>Tenha em mãos todas as informações sobre Vendas por Critério de desconto para análise de desempenho de cada oferta de desconto. </p>
  
  // facilidades
  const relatorioGerencial = <p>Faça análises assertivas, através de relatórios detalhados de venda por produto e tipo de desconto. </p>
  const formacao = <p>Cadastre os modelos de preços e descontos através do nosso recurso exclusivo, de forma fácil e versátil.</p>
  const etiquetas = <p>Use nossa ferramenta integrada para criar e editar layouts de etiquetas facilmente, diretamente no CISSPoder. </p>
  return(
    <>
      <Header />
      <div className='top'></div>
        <p className='title'>Conheça as facilidades e recursos</p>
      <div className='container'>
        <Cards 
          icone="desc"
          title="Variedade de Descontos"
          body={variedadeDescontos}
        />
        <Cards 
          title="Critérios de Desconto"
          body={criterios_de_Desconto}
        />
        <Cards 
          title="Manutenção de Critérios de Desconto"
          body={manutencao}
        />
        <Cards
          icone="graf"
          title="Relatórios"
          body={relatorio}
        />
      </div>
      <p className="title">Facilidades</p>
      <div className="container-facilidade">
        <Cards
          icone="planilha"
          title="FORMAÇÃO DE PREÇOS"
          body={formacao}
        />
        <Cards
          icone="graf"
          title="Relatórios Gerenciais"
          body={relatorioGerencial}
        />
        <Cards
          
          title="EDITOR DE ETIQUETAS"
          body={etiquetas}
        />
      </div>
      <Footer />
    </>
  );
}

export default Atacarejo;