import { CalendarRange } from 'lucide-react'
import { tripDays } from '../data/trip'
import { DayCard } from './DayCard'

function jumpToDay(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function TripTimeline() {
  return (
    <section className="timeline-section" aria-labelledby="timeline-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker"><CalendarRange size={16} /> DAILY JOURNAL</p>
          <h2 id="timeline-title">十四天，逐日展开</h2>
        </div>
        <p className="section-note">带问号的时间与“待确认”内容，仍需出发前核实。</p>
      </div>
      <nav className="date-nav no-export" aria-label="快速跳转到某一天">
        {tripDays.map((day) => (
          <button type="button" key={day.id} onClick={() => jumpToDay(day.id)}>
            <small>D{day.dayNumber}</small><strong>{day.date}</strong><span>{day.city.split('→').at(-1)?.trim()}</span>
          </button>
        ))}
      </nav>
      <div className="timeline-grid">{tripDays.map((day) => <DayCard day={day} key={day.id} />)}</div>
    </section>
  )
}
