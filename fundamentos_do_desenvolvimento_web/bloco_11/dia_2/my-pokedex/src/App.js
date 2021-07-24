import './App.css';
import Pokemon from './components/Pokemon'
import pokemons from './data';

function App() {
  return (
    <div>
      <h1 className='pokedex-title'>Pokedex!</h1>
      <div className='pokedex-container'>
        {
        pokemons.map(({ image, name, type, averageWeight, id }) => 
        <Pokemon key={ id } image={ image } name={name} type={type} averageWeigth={averageWeight}/>)
        }
     </div>
    </div>
  );
}

export default App;
