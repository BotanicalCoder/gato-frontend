import { renderWithProviders } from '../test-utils'
import { screen, waitFor } from '@testing-library/react'
import App from '../../App'
import userEvent from '@testing-library/user-event'

describe('Auth flow (context)', () => {
  it('logs in and redirects to dashboard', async () => {
    renderWithProviders(<App />)
    // go to login page
    await userEvent.click(screen.getByText(/login/i))
    // fill & submit
    await userEvent.type(screen.getByLabelText(/email/i), 'player@gato.dev')
    await userEvent.type(screen.getByLabelText(/password/i), 'password')
    await userEvent.click(screen.getByRole('button', { name: /enter game/i }))
    // redirected
    await waitFor(() => expect(screen.getByText(/player profile/i)).toBeInTheDocument())
    expect(screen.getByText(/player one/i)).toBeInTheDocument()
  })
})