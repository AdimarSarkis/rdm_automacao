import {FaRegLightbulb, FaPencilAlt, FaPaperclip, FaFileInvoiceDollar} from 'react-icons/fa';
import {BiMessageDetail} from 'react-icons/bi';
import { VscRemoteExplorer, VscSymbolProperty, VscGraph } from "react-icons/vsc";
import {BsGraphDown} from 'react-icons/bs';
import {SiGooglesheets} from 'react-icons/si';
import "./Cards.css";

const Cards = ({title, body, icone}) => {
  return(
    <div className='card'>
      {icone == "bulb" ? <FaRegLightbulb className='icon'/> : (
        icone == "pencil" ? <FaPencilAlt className='icon' /> : (
          icone == "clip" ? <FaPaperclip className='icon' /> : (
            icone == "messsage" ? <BiMessageDetail className='icon' /> : (
              icone == "tabelas" ? <FaFileInvoiceDollar className='icon'/> : (
                icone == "remote" ? <VscRemoteExplorer className='icon' /> : (
                  icone == "graf" ? <VscGraph className='icon' /> : (
                    icone == "desc" ? < BsGraphDown className='icon'/> : (
                      icone == "planilha" ? <SiGooglesheets className='icon'/> : <VscSymbolProperty className='icon' /> )
                  )
                )
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