import { useCallback, useMemo, useState } from 'react'
import { initialTodos } from '../data/todos'
import type { TodoFilter } from '../types'

const STORAGE_KEY = 'autumn-trip.todo-state.v1'

function readCompleted(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []
    const parsed: unknown = JSON.parse(stored)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((item): item is string => typeof item === 'string')
  } catch {
    return []
  }
}

function persistCompleted(ids: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  } catch {
    // The checklist still works in memory when storage is unavailable.
  }
}

export function useTodos() {
  const [completed, setCompleted] = useState<string[]>(readCompleted)
  const [filter, setFilter] = useState<TodoFilter>('all')

  const updateCompleted = useCallback((updater: (current: string[]) => string[]) => {
    setCompleted((current) => {
      const next = updater(current)
      persistCompleted(next)
      return next
    })
  }, [])

  const toggle = useCallback((id: string) => {
    updateCompleted((current) => current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id])
  }, [updateCompleted])

  const reset = useCallback(() => {
    updateCompleted(() => [])
    setFilter('all')
  }, [updateCompleted])

  const visibleTodos = useMemo(() => initialTodos.filter((todo) => {
    if (filter === 'done') return completed.includes(todo.id)
    if (filter === 'open') return !completed.includes(todo.id)
    return true
  }), [completed, filter])

  return {
    todos: visibleTodos,
    completed,
    filter,
    setFilter,
    toggle,
    reset,
    total: initialTodos.length,
  }
}
