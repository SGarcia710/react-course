import React from 'react';
import Media from './media'
import './playlist.css'


// function Playlist(props) {//Componente funcional, no tiene ciclo de vida
//   return(
//     <div>
//       {props}
//     </div>
//   )
// }
//Si no necesito un ciclo de vida, lo recomendable es hacer un componente funcional
// class Playlist extends Component {
//   render() {
function Playlist(props) {
  // const playlist = props.data.categories[0].playlist
  // console.log(props.data)
  return (
    <div className="Playlist">
      {
        props.playlist.map((item) => {
          //recordar que a la hora de mapear elementos en el DOM, necesitamos poner un key unico que no se repita.
          // return <Media title={item.title} key={item.id} author={item.author} type={item.type} image={item.cover} src={item.src}/> ES6
          return <Media openModal={props.handleOpenModal} {...item} key={item.id} /> //ES7
        })
      }
    </div>
  )
}
// }

export default Playlist;