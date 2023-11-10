// src/PokemonContext.js
import { createContext, useContext, useEffect } from 'react'
import { useQuery, QueryClient, QueryClientProvider } from 'react-query'
import * as api from './api'

const PokemonContext = createContext()

// eslint-disable-next-line react/prop-types
export const PokemonProvider = ({ children }) => {
  const queryClient = new QueryClient()

  const { data: pokemonList } = useQuery('pokemonList', api.getPokemonList)

  const getPokemonDetails = async (pokemonName) => {
    const { data } = await api.getPokemonDetails(pokemonName)
    return data
  }

  const {
    data: pokemonDetails,
    isLoading,
    error,
  } = useQuery(
    ['pokemonDetails', 'bulbasaur'],
    () => getPokemonDetails('bulbasaur'),
    {
      enabled: false,
      // Pass the query client to the query options
      queryClient: queryClient,
    }
  )

  const selectPokemon = (pokemonName) => {
    queryClient.invalidateQueries(['pokemonDetails', pokemonName])
  }

  useEffect(() => {
    if (pokemonList) {
      selectPokemon(pokemonList[0].name)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonList])

  return (
    <PokemonContext.Provider
      value={{ pokemonList, pokemonDetails, isLoading, error, selectPokemon }}
    >
      {/* Provide the query client to the entire app */}
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </PokemonContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePokemon = () => {
  const context = useContext(PokemonContext)
  if (!context) {
    throw new Error('usePokemon must be used within a PokemonProvider')
  }
  return context
}
