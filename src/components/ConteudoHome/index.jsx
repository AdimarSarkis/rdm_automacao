import "./ConteudoHome.css";
import {TfiPencilAlt2} from "react-icons/tfi";
import Cards from '../Cards';
const ConteudoHome = () => {

  const controleFiscal = <ul>
    <li>Emissão de Nota Fiscal Eletrônica (NF-e).</li>
    <li>Emissão Cupom fiscal / NFC-e.</li>
    <li>Emissão Nota Fiscal de Serviço (NFS-e).</li>
    <li>Manifesto Eletrônico de Documentos Fiscais (MDF-e).</li>
    <li>tributações de produtos, grupos e fornecedores (ICMS, PIS/COFINS).</li>
    <li>Apuração/Emissão dos Livros Fiscais (Entradas, Saídas, Inventário, Mapa ECF).</li>
    <li>Apuração GIA/ICMS.</li>
    <li>Geração do SINTEGRA.</li>
    <li>Geração SPED Fiscal.</li>
    <li>Geração Contribuições Fiscal.</li>
    <li>Geração SPED Contábil.</li>
    <li>Apuração CIAP.</li>
    <li>Apuração PIS/COFINS Ativo Imobilizado.</li>
  </ul>;

  const oferecendoParaLoja = <span>Com o sistema CISSPoder, você tem todo  Controle de Estoque, Vendas,Orçamento, Clientes, Fornecedores, Vendedores, Relatório, Logística de entrega, controladoria contábil e fiscal, etc...
   Navegue até o menu Contatos e agende uma demonstração.</span>

  const suporteRdm = <span>Nosso suporte customizado e personalizado por cliente, garante a melhoria de suas instalações, desde a implantação até a manutenção e suporte contínuo da estrutura necessária.
    acesso ao suporte para clientes CISSPoder. </span>

  const ramosAtividade = <span>Sistema de Gestão com especialidades nos ramos:
    <ul>
      <li>MATERIAIS DE CONSTRUÇÃO</li>
      <li>SUPERMERCADOS</li>
      <li>RESTAURANTES</li>
      <li>DISTRIBUIDORAS</li>
      <li>ATACAREJO</li>
      <li>LOJAS E DEPARTAMENTOS</li>
    </ul>
  </span>
  return(
    <>
      <div className="img"></div>
      <div className="conteudo-home">
        <span className='inicial'>
A RDM Automação oferece uma ampla variedade de serviços para atender cada tipo de negócio,
trazendo soluções Completas e avançadas
Trabalhamos com serviços e produtos de primeira linha a fim de proporcionar aos nossos clientes conforto e segurança na hora de automatizar seu estabelecimento. 
Utilizando o poderoso Sistema CISSPoder traz divervas vantagens</span>
        <div className='cards'>
          <Cards 
            title="Oferecendo para sua loja"
            icone="bulb"
            body={oferecendoParaLoja}
          />
          <Cards 
            title="Suporte ágil com a RDM Automação"
            icone="messsage"
            body={suporteRdm}
          />
          <Cards 
            title="Controle Fiscal"
            icone="pencil"
            body={controleFiscal}
          />
          <Cards 
            title="Ramos de Atividades"
            icone="clip"
            body={ramosAtividade}
  />
        </div>
      </div>
      
    </>
  );
}

export default ConteudoHome;