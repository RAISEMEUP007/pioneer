import { error } from '@/common/logger'
import { mockProposals } from '@/mocks/data/mockProposals'
import { useMockDelay } from '@/mocks/hooks/useMockDelay'

export const useProposals = () => {
  const { loading, data, error: err } = useMockDelay({ proposals: mockProposals })

  if (err) {
    error(err)
  }

  return {
    isLoading: loading,
    proposals: data?.proposals ?? [],
  }
}
