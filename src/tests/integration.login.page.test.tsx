import { renderWithProviders } from '../test-utils'
import Login from '../../pages/Login'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Login page integration', () => {
  it('shows error for invalid credentials', async () => {
    renderWithProviders(<Login />)
    await userEvent.type(screen.getByLabelText(/email/i), 'wrong@gato.dev')
    await userEvent.type(screen.getByLabelText(/password/i), 'nope')
    await userEvent.click(screen.getByRole('button', { name: /enter game/i }))
    await waitFor(() => expect(screen.getByText(/login failed|invalid/i)).toBeInTheDocument())
  })
})