import { renderWithProviders } from '../test-utils'
import Todos from '../../pages/Todos'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Todos page integration', () => {
  it('lists and creates a new quest', async () => {
    renderWithProviders(<Todos />)
    // list shows initial items
    await waitFor(() => expect(screen.getByText(/first quest/i)).toBeInTheDocument())
    // add new quest
    await userEvent.type(screen.getByLabelText(/title/i), 'Legendary Bug Fix')
    await userEvent.click(screen.getByRole('button', { name: /add quest/i }))
    await waitFor(() => expect(screen.getByText(/legendary bug fix/i)).toBeInTheDocument())
  })
})