import { http, HttpResponse } from 'msw'

let todos = [
  { id: '1', title: 'First quest', notes: 'Slay setup bugs', done: false },
  { id: '2', title: 'Collect coins', notes: null, done: true },
]

export const handlers = [
  http.post('/api/auth/login', async ({ request }) => {
    const body = await request.json() as any
    if(body.email === 'player@gato.dev' && body.password === 'password'){
      return HttpResponse.json({ token: 'test-token' })
    }
    return HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 })
  }),

  http.post('/api/auth/register', async ({ request }) => {
    const body = await request.json() as any
    if(body.email && body.displayName && body.password){
      return HttpResponse.json({ message: 'OK' }, { status: 200 })
    }
    return HttpResponse.json({ message: 'Invalid' }, { status: 400 })
  }),

  http.get('/api/me', () => {
    return HttpResponse.json({
      email: 'player@gato.dev',
      displayName: 'Player One',
      points: 1234,
      streakCount: 7,
      badges: ['Starter', 'Bug Slayer']
    })
  }),

  http.get('/api/todos', () => {
    return HttpResponse.json(todos)
  }),

  http.post('/api/todos', async ({ request }) => {
    const body = await request.json() as any
    const t = { id: String(Date.now()), title: body.title, notes: body.notes ?? null, done: false }
    todos = [t, ...todos]
    return HttpResponse.json(t, { status: 201 })
  }),

  http.patch('/api/todos/:id/complete', ({ params }) => {
    const id = params.id as string
    todos = todos.map(t => t.id === id ? { ...t, done: true } : t)
    const item = todos.find(t => t.id == id)
    if(!item) return HttpResponse.json({ message: 'Not found' }, { status: 404 })
    return HttpResponse.json(item)
  }),
]