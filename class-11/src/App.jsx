import { usePokemon, PokemonProvider } from './context'
import './app.css' // Importa el archivo de estilos

function PokemonList() {
  const { pokemonList, selectPokemon } = usePokemon()

  return (
    <div className="pokemon-list">
      <h2>Pokemon List</h2>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name} onClick={() => selectPokemon(pokemon.name)}>
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

function PokemonDetails() {
  const { pokemonDetails, isLoading, error } = usePokemon()

  if (isLoading) {
    return <p className="loading">Loading...</p>
  }

  if (error) {
    return <p className="error">Error: {error.message}</p>
  }

  return (
    <div className="pokemon-details">
      <h2>Pokemon Details</h2>
      <pre>{JSON.stringify(pokemonDetails, null, 2)}</pre>
    </div>
  )
}

function App() {
  return (
    <PokemonProvider>
      <div className="container">
        <div className="header">
          <h1>Pokemon App</h1>
        </div>
        <div style={{ display: 'flex' }}>
          <PokemonList />
          <PokemonDetails />
        </div>
      </div>
    </PokemonProvider>
  )
}

export default App
