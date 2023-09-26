import { useErrorHandling } from '../hooks/useErrorHandling'

const ErrorDisplay = () => {
  const { error, errorMessage } = useErrorHandling()

  return (
    <>
      <p>{error.statusText ?? 'An Error Occurred'}</p>
      <p>{errorMessage}</p>
    </>
  )
}

export default ErrorDisplay
