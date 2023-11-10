import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2'

export const getPokemonList = async () => {
  const response = await axios.get(`${baseUrl}/pokemon`)
  return response.data.results
}

export const getPokemonDetails = async (pokemonName) => {
  const response = await axios.get(`${baseUrl}/pokemon/${pokemonName}`)
  return response.data
}
