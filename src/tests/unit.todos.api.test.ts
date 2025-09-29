import { listTodos, createTodo, completeTodo } from '../../api/todos'

describe('todos api', () => {
  it('lists todos', async () => {
    const rows = await listTodos()
    expect(Array.isArray(rows)).toBe(true)
    expect(rows[0]).toHaveProperty('title')
  })

  it('creates a todo', async () => {
    const created = await createTodo({ title: 'New quest' })
    expect(created.title).toBe('New quest')
  })

  it('completes a todo', async () => {
    const rows = await listTodos()
    const open = rows.find(t => !t.done) || rows[0]
    const done = await completeTodo(open.id)
    expect(done.done).toBe(true)
  })
})