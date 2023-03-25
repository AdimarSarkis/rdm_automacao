import './Modal.css';
import ReactModal from 'react-modal';
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
const Modal = ({
  title,
  body
}) => {
  const [modalIsOpen, setIsOpen] = useState(true);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div className="Container">
      <ReactModal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='exemple modal'
        overlayClassName='modal-overlay'
        className="modal-content"
        ariaHideApp={false}
      >
        <div className="container">
          <AiOutlineClose className="btn-close" onClick={closeModal}/>
          <h1>{title}</h1>
          {body}
        </div>
      </ReactModal>
    </div>
  );
}
export const openModal = () => setIsOpen(true);
export default Modal;