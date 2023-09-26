import { useCallback, useEffect, useState } from 'react'
import { AccountantService } from '../services/AccountantsService'
import { AccountantType } from '../types/Account'

const useAccountantsData = () => {
  const { fetchAccountants } = AccountantService()
  const [accountants, setAccountants] = useState<AccountantType[]>([])
  const [resultsCount, setResultsCount] = useState(4)
  const [isLoading, setIsLoading] = useState(false)

  const loadAccountants = async () => {
    try {
      setIsLoading(true)
      const response = await fetchAccountants(resultsCount, 1, 'foobar', 'female')
      setAccountants(response.results)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    (async () => await loadAccountants())()
  }, [resultsCount])

  const loadMore = useCallback(() => setResultsCount(prevCount => prevCount + 4), [])

  return { loadMore, accountants, isLoading }
}

export default useAccountantsData
