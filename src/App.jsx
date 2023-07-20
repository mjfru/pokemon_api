import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [poke, setPoke] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        return response.json();
      }).then(data => {
        setPoke(data.results);
      }).catch(err=> {
        console.log(err);
      })
  }, []);

    return (
    <div>
      <h2>The (First) 807 Pokémon:</h2>
      <ol>
          {
            poke.map((pokemonObj, index) => {
              return (<li key={index}> {pokemonObj.name} </li>)
            })
          }
      </ol>
    </div>
  )
}

export default App
