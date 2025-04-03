// External Libraries
import useSWR from 'swr'

// Services
import { getPlanets } from '@services/api/starWars'

// Types
import { UseSWPlanetsParams } from './types'

export function useSWPlanets() {
  // Hooks
  const { data } = useSWR(`/planets`, fetchPlanets)

  // Functions
  function fetchPlanets() {
    return getPlanets()
  }

  return { data }
}
