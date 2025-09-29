import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { completeTodo, createTodo, listTodos } from '../api/todos'
import { useState } from 'react'

export default function Todos(){
  const qc = useQueryClient()
  const { data, isLoading, error } = useQuery({ queryKey: ['todos'], queryFn: listTodos })
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')

  const createMut = useMutation({
    mutationFn: createTodo,
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['todos'] }); setTitle(''); setNotes('') }
  })
  const completeMut = useMutation({
    mutationFn: (id: string) => completeTodo(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] })
  })

  function onSubmit(e: React.FormEvent){
    e.preventDefault()
    if(!title.trim()) return
    createMut.mutate({ title, notes: notes || undefined })
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="card">
        <h2 className="arcade-title mb-3 text-base">Quest Log</h2>
        {isLoading ? 'Loading...' : error ? 'Failed to load todos' : (
          <div className="flex flex-col gap-2">
            {data?.map(t => (
              <div key={t.id} className={`todo ${t.done ? 'opacity-70' : ''}`}>
                <div className="flex items-center gap-2">
                  <span>{t.done ? '✅' : '🟥'}</span>
                  <div>
                    <div className="font-bold">{t.title}</div>
                    {t.notes && <div className="text-xs text-slate-400">{t.notes}</div>}
                  </div>
                </div>
                {!t.done && <button className="btn-arcade" onClick={() => completeMut.mutate(t.id)}>Complete</button>}
              </div>
            ))}
            {!data?.length && <div className="badge">No quests yet</div>}
          </div>
        )}
      </div>
      <div className="card">
        <h2 className="arcade-title mb-3 text-base">New Quest</h2>
        <form className="space-y-3" onSubmit={onSubmit}>
          <div>
            <label className="label">Title</label>
            <input className="input" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Defeat the bug 🐛" />
          </div>
          <div>
            <label className="label">Notes</label>
            <textarea className="input" rows={4} value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Optional description..." />
          </div>
          <button className="btn-arcade" disabled={createMut.isPending}>{createMut.isPending ? 'Adding...' : 'Add Quest'}</button>
        </form>
      </div>
    </div>
  )
}