import '@testing-library/jest-dom'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { server } from '../tests/mocks/server'
import 'whatwg-fetch'

// Start MSW for unit/integration tests
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// Silence React Router DOM warnings during tests
window.scrollTo = () => {}