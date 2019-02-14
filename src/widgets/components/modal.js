import React from 'react';
import './modal.css'

function Modal(props) {
  return(
    <div className="Modal">
      {props.children}
      <button 
        onClick={props.handleClick}
        className="Modal-close"
      /> 
      {/* Cando el elemento no tiene contenido podemos cerrarlo en el mismo */}
    </div>
  )
}

export default Modal;