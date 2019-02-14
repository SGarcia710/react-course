import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
  //con ECMAScript 6 tendriamos siempre que bindear las cosas de esta manera.
  // constructor(props) {
  //   super(props)
  //   this.state = { //asi activamos la manipulacion de estados para cambios de informacion dinamica en la pagina.
  //     author: props.author,
  //     title: props.title,
  //     image: props.image
  //   }
  //   //   this.handleClick = this.handleClick.bind(this)//Enlazo la clase con la funcion.
  // }

  // state = {//Cambiar estados con ES7
  //   author: 'Pedrito'
  // }

  handleClick = (media) => {//Con ECMAScript 7, con el arrow function directamente la funcion hereda el contexto de su padre
    // console.log(this.props.image)
    // this.setState({//Asi cambio un estado
    //   author: 'Leonidas Esteban',
    // })
    this.props.openModal(this.props);//envio todas las propiedades de mi media
    console.log(this.props.src)

  }

  render() {
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
      }
    }
    //Las propiedades no pueden cambiar porque son inmutables, sin embargo los estados si, ellos son mutables. Asi podemos hacer 
    //webs dinamicas.
    return (//JSX sintaxis para construir elementos dentro de JS. Funciona como HTML
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            className="Media-image"
            src={this.props.cover}
            alt={this.props.title}
            width={260}
            height={160}
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

//Validacion con el modulo PropTypes: TIPOS y REQUERIDOS.
//reactjs.org/docs/typechecking-with-proptypes.html
//object, func, array, string, number
//Clase 10.
Media.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;