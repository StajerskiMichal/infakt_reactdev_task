import axios from 'axios'
import { useResponseHandler } from '../hooks/useResponseHandler'
import { AccountantResponseType } from '../types/Account'
import { RequestData } from '../enums/Request'

export const AccountantService = () => {
  const { handleResponse } = useResponseHandler()

  const fetchAccountants = async (results: number = 4, page?: number, seed?: string, gender?: string) => {
    const queryParams = new URLSearchParams()

    //query param gender pomino ustawienia na female zwraca obie plcie w wynikach z GETA
    queryParams.append('results', `${results}`)
    if (seed) queryParams.append('seed', `${seed}`)
    if (gender) queryParams.append('gender', `${gender}`)
    if (page) queryParams.append('page', `${page}`)

    const response = await axios.get<AccountantResponseType>(`${RequestData.BaseUrl}?${queryParams}`)
    return handleResponse(response)
  }

  return {
    fetchAccountants,
  }
}