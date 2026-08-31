import { CheckCircle2, Circle, MapPinned } from 'lucide-react'
import { tripDays } from '../data/trip'
import { initialTodos } from '../data/todos'

export function ExportSheet({ completed }: { completed: string[] }) {
  return (
    <section className="export-sheet" aria-hidden="true">
      <header className="export-sheet__hero">
        <img src={`${import.meta.env.BASE_URL}travel-hero.png`} alt="" crossOrigin="anonymous" />
        <div><small>AUTUMN ROUTE · 2026</small><h1>一路向秋</h1><p>云南—西安 · 09.24—10.07 · 14 天</p></div>
      </header>
      <div className="export-route">
        <div className="export-route__title"><MapPinned size={25} /><strong>城市移动线</strong></div>
        <svg viewBox="0 0 1160 160" role="img" aria-label="北京至云南、西安再返回北京的路线">
          <path
            d="M62 80 C170 15 230 135 340 80 S510 22 615 80 S780 134 880 80 S1020 20 1100 80"
            fill="none"
            stroke="#d96c3b"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="9 10"
          />
          {[
            ['北京', '09.24', 62], ['昆明 / 晋宁', '09.25', 270], ['西双版纳', '09.26', 477],
            ['普洱', '09.29', 684], ['西安', '10.05', 891], ['北京', '10.07', 1100],
          ].map(([city, date, x]) => (
            <g key={`${city}-${date}`}>
              <circle cx={Number(x)} cy="80" r="10" fill="#f6f1e7" stroke="#1f6f5f" strokeWidth="4" />
              <text x={Number(x)} y="42" fill="#1f2a24" fontSize="13" fontWeight="800" textAnchor="middle">{city}</text>
              <text x={Number(x)} y="116" fill="#667168" fontSize="11" fontWeight="600" textAnchor="middle">{date}</text>
            </g>
          ))}
        </svg>
      </div>
      <div className="export-days">
        {tripDays.map((day) => (
          <article key={day.id}>
            <span className="export-day-number">{String(day.dayNumber).padStart(2, '0')}</span>
            <div><p>{day.date} · {day.weekday}</p><h2>{day.city}</h2><ul>{day.schedule.map((item, index) => <li key={index}>{item.time && <time>{item.time}</time>} {item.title}</li>)}</ul></div>
          </article>
        ))}
      </div>
      <div className="export-todos">
        <h2>出发前待办 <small>{completed.length}/{initialTodos.length} 完成</small></h2>
        <div>{initialTodos.map((todo) => <p key={todo.id} className={completed.includes(todo.id) ? 'is-done' : ''}>{completed.includes(todo.id) ? <CheckCircle2 /> : <Circle />}<span>{todo.title}</span></p>)}</div>
      </div>
      <footer>一路向秋 · 2026　｜　公开版本不含旅客姓名与订单信息</footer>
    </section>
  )
}
