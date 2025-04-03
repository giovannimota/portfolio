// External Libraries
import useSWR from 'swr'

// Services
import { getPeoples } from '@services/api/starWars'

// Types
import { UseSWPeoplesParams } from './types'

export function useSWPeoples() {
  // Hooks
  const { data } = useSWR(`/peoples`, fetchPeoples)

  // Functions
  function fetchPeoples() {
    return getPeoples()
  }

  return { peoples: data?.results }
}
