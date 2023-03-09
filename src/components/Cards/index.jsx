import {
  FaRegLightbulb,
  FaPencilAlt,
  FaPaperclip,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import {
  VscRemoteExplorer,
  VscSymbolProperty,
  VscGraph,
} from "react-icons/vsc";
import { BsGraphDown, BsCreditCardFill } from "react-icons/bs";
import { SiGooglesheets } from "react-icons/si";
import { IoBarcodeSharp } from "react-icons/io5";
import facilidade from "../../assets/facilidade.png"
import self from "../../assets/self.png"
import { AiOutlineThunderbolt, AiOutlineFolderOpen } from "react-icons/ai"
import { GrAchievement } from "react-icons/gr";
import "./Cards.css";

const Cards = ({ title, body, icone }) => {
  return (
    <div className="card">
      {icone == "bulb" ? <FaRegLightbulb className="icon" /> : (
        icone == "pencil" ? <FaPencilAlt className="icon" /> : (
          icone == "clip" ? <FaPaperclip className="icon" /> : (
            icone == "message" ? <BiMessageDetail className="icon" /> : (
              icone == "tabelas" ? <FaFileInvoiceDollar className="icon" /> : (
                icone == "remote" ? <VscRemoteExplorer className="icon" /> : (
                  icone == "graf" ? <VscGraph className="icon" /> : (
                    icone == "desc" ? <BsGraphDown className="icon" /> : (
                      icone == "planilha" ? <SiGooglesheets className="icon" /> : (
                        icone == "card" ? <BsCreditCardFill className="icon" /> : (
                          icone == "code" ? <IoBarcodeSharp className="icon" /> : (
                            icone == "self" ? <img src={self} className="image"/> : (
                              icone == "facil" ? <img src={facilidade} className="image"/> : (
                                icone == "thunder" ? <AiOutlineThunderbolt className="icon" /> : (
                                  icone == "champ" ? <GrAchievement className="icon" /> : (
                                    icone == "folder" ? <AiOutlineFolderOpen className='icon' /> : 
                                      <VscSymbolProperty className="icon" />
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )}

      <h2 className="title">{title}</h2>
      <span>{body}</span>
      <img src="" alt="" />
    </div>
  );
};

export default Cards;
