import "./ConteudoDownload.css"
import Cards from '../Cards';
import { AcessoRemoto} from './links';

const ConteudoDownload = () => {
  
  return(
    <>
      <div className='downloads'>
        <div className='top'></div>
       <p id="details">A RDM disponibiliza as Ferramentas para facilitar o atendimento.</p> 
        <div className="download">
          <Cards className='card'
            icone="remote"
            title="Acesso Remoto"
            body={<AcessoRemoto />}
          />
        </div>
      </div>
    </>
  );
}

export default ConteudoDownload;