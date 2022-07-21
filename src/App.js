import { Component } from "react"
// import Pokedex from './Pokedex';
import Pokegame from "./Pokegame";

class App extends Component {
  render() {

    return <Pokegame />

    // return <Pokedex />
  }
}

// esta es la forma funcional de escribirlo se llama a la funcion App la cual como no es
// una clase no tiene metodo render
// function App() {
//   return (
//     <Pokecard />
//   );
// }

export default App;
