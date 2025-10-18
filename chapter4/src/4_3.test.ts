import { describe, it, vi, expect } from 'vitest'
import * as Fetchers from './4_3_fetchers'
import { getUser } from './great'


interface HttpError {
  status: number
  statusText: string
  data: { message: string }
}

const httpError: HttpError = {
  status: 500,
  statusText: 'Internal Server Error',
  data: { message: 'Failed to fetch profile' },
}


describe('API 모킹하기', () => {
  it('성공', async () => {
    vi.spyOn(Fetchers, 'fetchProfile').mockResolvedValue({
      id: 'dongjo',
      email: 'dongjo@example.com',
    })

    await expect(
      getUser()
    ).resolves.toBe('dongjo - dongjo@example.com')
  })


  it('실패', async () => {
    vi.spyOn(Fetchers, 'fetchProfile').mockRejectedValue(httpError)

    await expect(
      getUser()
    ).rejects.toMatchObject(httpError)
  })
})