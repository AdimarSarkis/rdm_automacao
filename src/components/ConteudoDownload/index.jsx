import "./ConteudoDownload.css"
import Cards from '../Cards';
import { AcessoRemoto, Utilitarios, Tabelas} from './links';

const ConteudoDownload = () => {
  
  return(
    <>
      <div className='downloads'>
        <div className='top'></div>
       <p id="details">A RDM disponibiliza as Ferramentas para facilitar o atendimento.</p> 
        <div className="download">
          <Cards 
            icone="remote"
            title="Acesso Remoto"
            body={<AcessoRemoto />}
          />
          <Cards 
            icone=""
            title="Utilitarios"
            body={<Utilitarios />}
          />
          <Cards 
            icone="tabelas"
            title="Tabelas"
            body={<Tabelas />}
          />
        </div>
        
      </div>
    </>
  );
}

export default ConteudoDownload;