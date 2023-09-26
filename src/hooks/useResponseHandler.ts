import { AxiosResponse } from 'axios'

export const useResponseHandler = () => {
  const handleResponse = <T>(response: AxiosResponse<T>): T => {
    if (response.status !== 200 && response.status !== 201) {
      if (response instanceof Error) {
        handleRejection(response)
        throw response
      }
      throw new Error('Unexpected response')
    }
    return response.data
  }

  const handleRejection = (error: Error) => {
    const errorMessage = error.message
    if (Array.isArray(errorMessage)) {
      console.log('Error encountered:', errorMessage)
    }
  }

  return { handleResponse }
}
