import {
  BedDouble, BusFront, CheckCircle2, CircleHelp, Coffee, Footprints,
  MapPin, MoonStar, Plane, Route, TrainFront, UtensilsCrossed,
} from 'lucide-react'
import type { ScheduleItem, TravelDay, TravelMode } from '../types'
import { DestinationVisual } from './DestinationVisual'

const modeIcons: Record<TravelMode, typeof Plane> = {
  flight: Plane,
  train: TrainFront,
  car: BusFront,
  walk: Footprints,
  rest: BedDouble,
  explore: MapPin,
  unknown: CircleHelp,
}

function ScheduleRow({ item }: { item: ScheduleItem }) {
  const Icon = modeIcons[item.mode]
  const StatusIcon = item.status === 'confirmed' ? CheckCircle2 : item.status === 'pending' ? CircleHelp : Route
  const statusLabel = item.status === 'confirmed' ? '已确认' : item.status === 'pending' ? '待确认' : '计划'
  return (
    <li className="schedule-row">
      <span className={`schedule-row__icon mode-${item.mode}`}><Icon size={18} /></span>
      <div>
        <div className="schedule-row__title">
          {item.time && <time>{item.time}</time>}
          <strong>{item.title}</strong>
        </div>
        {item.detail && <p>{item.detail}</p>}
      </div>
      {item.status && <span className={`status status--${item.status}`}><StatusIcon size={13} /> {statusLabel}</span>}
    </li>
  )
}

export function DayCard({ day }: { day: TravelDay }) {
  return (
    <article className="day-card" id={day.id}>
      <div className="day-card__top">
        <div className="day-badge"><small>DAY</small><b>{String(day.dayNumber).padStart(2, '0')}</b></div>
        <div className="day-card__heading">
          <p><time dateTime={`2026-${day.date.replace('.', '-')}`}>{day.date}</time> · {day.weekday}</p>
          <h3>{day.city}</h3>
          <span>{day.summary}</span>
        </div>
        <DestinationVisual theme={day.visual} compact />
      </div>
      {day.route && <p className="day-card__route"><Route size={15} /> {day.route}</p>}
      <ul className="schedule-list">{day.schedule.map((item, index) => <ScheduleRow item={item} key={`${day.id}-${index}`} />)}</ul>
      <div className="day-card__ornament" aria-hidden="true">{day.visual === 'tea' ? <Coffee /> : day.visual === 'citywall' ? <MoonStar /> : <UtensilsCrossed />}</div>
    </article>
  )
}
