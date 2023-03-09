import Cards from '../Cards';
import Footer from '../Footer';
import Header from '../Header';
import './atacarejo.css';

const Radar = () => {
  return (
    <>
      <Header />
      <div className='top'></div>
        <p className='title'>
        Simplifique e dinamize a
gestão de documentos emitidos
para sua empresa.
        </p>
      <div className='container'>
        <Cards 
          icone="folder"
          title="Gestão e controle de documentos emitidos para sua empresa"
          body="Através de consultas no sistema e relatórios o usuário poderá analisar quantas Notas Fiscais foram emitidas, no qual o cliente tem ou não conhecimento da existência destas NF contra sua empresa."
        />
        <Cards 
          icone="folder"
          title="Ideal para compras rápidas de até 15 itensXML da Nota Fiscal disponível no mesmo momento em que o Fornecedor emitir"
          body="Através de consultas minuto a minuto na Receita Federal o sistema estará sempre atualizado com os documentos emitidos para a sua empresa"
        />
        <Cards 
          icone="folder"
          title="Realização dos manifestos obrigatórios diretamente na Sefaz"
          body="Através de um clique o usuário envia o manifesto para as notas selecionadas diretamente para a Sefaz"
        />
        <Cards
        icone="folder"
          title="Agilidade nas operações de entrada de mercadorias"
          body='Com a possibilidade de antecipar os cadastros de fornecedores e produtos o ganho de velocidade na entrada de mercadorias aumenta consideravelmente' />
      </div>
      <button id='saibamais'><a href="https://ciss.com.br/radarxml" target="_blank" id='mais'>Conheça mais</a></button>
      <Footer />
    </>
  );
}
export default Radar;