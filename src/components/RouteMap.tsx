import { ArrowRight, CarFront, Map, Plane, TrainFront } from 'lucide-react'
import { routeStops } from '../data/trip'
import type { TravelMode } from '../types'

const modeLabel: Partial<Record<TravelMode, string>> = {
  flight: '飞机', train: '高铁', car: '汽车', walk: '步行',
}

export function RouteMap() {
  return (
    <section className="route-section paper-card" aria-labelledby="route-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker"><Map size={16} /> ROUTE MAP</p>
          <h2 id="route-title">从北方出发，沿着秋天绕一圈</h2>
        </div>
        <div className="route-legend" aria-label="交通图例">
          <span><Plane size={15} /> 飞机</span><span><TrainFront size={15} /> 高铁</span><span><CarFront size={15} /> 汽车</span>
        </div>
      </div>
      <div className="route-map-wrap">
        <svg className="route-map" viewBox="0 0 860 480" role="img" aria-label="北京、昆明、晋宁、西双版纳、普洱、西安再返回北京的移动路线">
          <defs>
            <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0V36" fill="none" stroke="#1f2a24" strokeOpacity=".06" /></pattern>
            <filter id="paper-shadow"><feDropShadow dx="0" dy="8" stdDeviation="8" floodOpacity=".12" /></filter>
          </defs>
          <rect width="860" height="480" rx="26" fill="#ebe6da" />
          <rect width="860" height="480" rx="26" fill="url(#grid)" />
          <path className="china-silhouette" d="M197 88 305 54l68 26 80-13 48 32 74-8 62 41 77 7 32 62-41 53-53 10-31 71-64-12-66 50-92-3-44 46-73-16-76-53-33-73-45-48 30-68-26-56z" />
          <path className="route-line route-line--flight" d="M676 74 Q500 112 382 274" />
          <path className="route-line" d="M382 274 404 312 333 405 370 363 382 274 404 312" />
          <path className="route-line route-line--flight" d="M404 312 Q475 230 548 170" />
          <path className="route-line route-line--pending" d="M548 170 Q612 116 676 74" />
          {routeStops.map((stop, index) => (
            <g key={`${stop.city}-${stop.date}-${index}`} className="route-stop">
              <circle cx={stop.x} cy={stop.y} r="10" />
              <circle cx={stop.x} cy={stop.y} r="4" className="route-stop__core" />
              <text x={stop.labelX} y={stop.labelY} className="route-stop__city">{stop.city}</text>
              <text x={stop.labelX} y={stop.labelY + 18} className="route-stop__date">{stop.date}</text>
            </g>
          ))}
          <text x="54" y="442" className="map-note">非精确比例 · 用于呈现城市移动关系</text>
        </svg>
      </div>
      <div className="mobile-route" aria-label="移动端路线摘要">
        {routeStops.map((stop, index) => (
          <div className="mobile-route__stop" key={`${stop.city}-mobile-${index}`}>
            <strong>{stop.city}</strong><small>{stop.date}</small>
            {index < routeStops.length - 1 && <span aria-hidden="true"><ArrowRight size={16} /> {stop.mode ? modeLabel[stop.mode] : ''}</span>}
          </div>
        ))}
      </div>
    </section>
  )
}
