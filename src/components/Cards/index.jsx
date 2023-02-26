import {FaRegLightbulb, FaPencilAlt, FaPaperclip, FaFileInvoiceDollar} from 'react-icons/fa';
import {BiMessageDetail} from 'react-icons/bi';
import { VscRemoteExplorer, VscSymbolProperty } from "react-icons/vsc";
import "./Cards.css";

const Cards = ({title, body, icone}) => {
  return(
    <div className='card'>
      {icone == "bulb" ? <FaRegLightbulb className='icon'/> : (
        icone == "pencil" ? <FaPencilAlt className='icon' /> : (
          icone == "clip" ? <FaPaperclip className='icon' /> : (
            icone == "messsage" ? <BiMessageDetail className='icon' /> : (
              icone == "tabelas" ? <FaFileInvoiceDollar className='icon'/> : (
                icone == "remote" ? <VscRemoteExplorer className='icon' /> :
                  <VscSymbolProperty className='icon' /> 
              )
            ))
        )
      )}
      <h2 className='title'>{title}</h2>
      <span>{body}</span>
    </div>
  );
}

export default Cards;