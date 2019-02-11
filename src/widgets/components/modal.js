import React from 'react';
import './modal.css'

function Modal(props) {
  return(
    <div className="Modal">
      A dios le pido
      que si me muero sea de amor
      que si me enamoro se a de voz
      {props.children}
      <button onClick={props.handleClick}>Cerrar</button>
    </div>
  )
}

export default Modal;