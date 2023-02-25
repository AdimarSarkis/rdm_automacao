import {FaRegLightbulb, FaPencilAlt, FaPaperclip} from 'react-icons/fa';
import {BiMessageDetail} from 'react-icons/bi';
import "./Cards.css";

const Cards = ({title, body, icone}) => {
  return(
    <div className='card'>
      {icone == "bulb" ? <FaRegLightbulb className='icon'/> : (
        icone == "pencil" ? <FaPencilAlt className='icon' /> : (
          icone == "clip" ? <FaPaperclip className='icon' /> : <BiMessageDetail className='icon' />
        )
      )}
      <h2 className='title'>{title}</h2>
      <span>{body}</span>
    </div>
  );
}

export default Cards;