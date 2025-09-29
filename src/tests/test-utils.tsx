import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'

export function renderWithProviders(ui: ReactNode){
  const qc = new QueryClient()
  return render(
    <QueryClientProvider client={qc}>
      <BrowserRouter>
        <AuthProvider>{ui}</AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}