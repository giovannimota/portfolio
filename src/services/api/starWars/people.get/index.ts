import { SW_API } from '../..'
import { HttpResponse } from './response'

export async function getPeoples() {
  const url = `/people`

  const response = await SW_API.get<HttpResponse>(url)
  return response.data
}
