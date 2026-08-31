import { Check, Circle, ListChecks, RotateCcw, Tag } from 'lucide-react'
import type { TodoFilter } from '../types'
import type { useTodos } from '../hooks/useTodos'

const filters: { value: TodoFilter; label: string }[] = [
  { value: 'all', label: '全部' },
  { value: 'open', label: '未完成' },
  { value: 'done', label: '已完成' },
]

export function TodoList({ model }: { model: ReturnType<typeof useTodos> }) {
  const { todos, completed, filter, setFilter, toggle, reset, total } = model
  const doneCount = completed.length
  const progress = Math.round((doneCount / total) * 100)

  const handleReset = () => {
    if (doneCount === 0 || window.confirm('重置全部完成状态？此操作只会清空浏览器里的勾选记录。')) reset()
  }

  return (
    <section className="todo-section paper-card" aria-labelledby="todo-title">
      <div className="todo-header">
        <div>
          <p className="section-kicker"><ListChecks size={16} /> BEFORE DEPARTURE</p>
          <h2 id="todo-title">出发前待办</h2>
          <p>勾选结果仅保存在当前浏览器，不会上传。</p>
        </div>
        <div className="progress-ring" style={{ '--progress': `${progress * 3.6}deg` } as React.CSSProperties} aria-label={`已完成 ${progress}%`}>
          <div><strong>{doneCount}/{total}</strong><small>完成</small></div>
        </div>
      </div>
      <div className="todo-toolbar no-export">
        <div className="segmented-control" aria-label="筛选待办">
          {filters.map((item) => (
            <button type="button" className={filter === item.value ? 'is-active' : ''} aria-pressed={filter === item.value} onClick={() => setFilter(item.value)} key={item.value}>{item.label}</button>
          ))}
        </div>
        <button type="button" className="text-button" onClick={handleReset} disabled={doneCount === 0}><RotateCcw size={15} /> 重置</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => {
          const isDone = completed.includes(todo.id)
          return (
            <li key={todo.id} className={isDone ? 'is-done' : ''}>
              <button type="button" className="todo-check" onClick={() => toggle(todo.id)} aria-label={`${isDone ? '取消完成' : '标记完成'}：${todo.title}`}>
                {isDone ? <Check size={18} /> : <Circle size={18} />}
              </button>
              <button type="button" className="todo-content" onClick={() => toggle(todo.id)}>
                <strong>{todo.title}</strong><span>{todo.detail}</span>
              </button>
              <div className="todo-meta"><span><Tag size={12} /> {todo.category}</span>{todo.due && <time>{todo.due}</time>}</div>
            </li>
          )
        })}
        {todos.length === 0 && <li className="todo-empty">这里已经清空啦，切换筛选看看其他待办。</li>}
      </ul>
    </section>
  )
}
