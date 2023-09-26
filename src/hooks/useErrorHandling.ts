import { useState } from 'react'
import { useRouteError } from 'react-router-dom'

interface ErrorResponse {
  data: unknown;
  status: number;
  statusText: string;
}

export const useErrorHandling = () => {
  const errorResponse = useRouteError() as ErrorResponse
  const [message, setMessage] = useState('')

  const setErrorMessage = (status: number) => {
    switch (status) {
      case 404:
        setMessage('No data')
        break;
      case 500:
        setMessage('Server error')
        break;
      default:
        setMessage('Unexpected error occurred')
    }
  };

  setErrorMessage(errorResponse.status)

  return { errorMessage: message, error: errorResponse }
}
