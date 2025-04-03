import { SW_API } from '../..'
import { HttpResponse } from './response'

export async function getPlanets() {
  const url = `/planets`

  const response = await SW_API.get<HttpResponse>(url)
  return response.data
}
