import React from 'react'; //Me servira para crear mis componentes
import { render } from 'react-dom'; //Me servira para renderizar(poner en algun lugar esos componentes en el navegador)
import Home from '../pages/containers/home'
// import Playlist from '../playlist/components/playlist';
import data from '../api.json'; // Como la extension no es js, toca ponersela manualmente.
// console.log('hola mundo')


const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo hare);
// const holaMundo = <h1>Hola mundo.</h1>;
// render(<Media type='video' title="Que es Responsive Design?" author="Sebastian Garcia" image="./images/covers/bitcoin.jpg"/>, app);
render(<Home data={data} />, homeContainer);