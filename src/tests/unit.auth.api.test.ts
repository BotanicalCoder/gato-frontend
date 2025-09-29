import { login, register } from '../../api/auth'
import { api } from '../../api/client'

describe('auth api', () => {
  it('logs in and returns token', async () => {
    const res = await login({ email: 'player@gato.dev', password: 'password' })
    expect(res.token).toBe('test-token')
  })

  it('registers a user', async () => {
    const res = await register({ email: 'new@gato.dev', displayName: 'New', password: 'passw0rd' })
    expect(res.message).toBeDefined()
  })
})