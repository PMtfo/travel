import { CalendarDays, Download, LockKeyholeOpen, MapPinned, Sparkles } from 'lucide-react'

interface Props {
  exporting: boolean
  onExport: () => void
}

export function Hero({ exporting, onExport }: Props) {
  return (
    <header className="hero shell">
      <div className="hero__content">
        <div className="eyebrow"><LockKeyholeOpen size={15} /> 公开旅行手账 · 不含个人身份信息</div>
        <p className="hero__kicker"><Sparkles size={17} /> AUTUMN ROUTE · 2026</p>
        <h1>一路向秋</h1>
        <p className="hero__subtitle">从云南雨林、茶山与滇池南岸，一路抵达长安。</p>
        <div className="hero__facts" aria-label="行程概览">
          <span><CalendarDays size={18} /> 09.24—10.07</span>
          <span><MapPinned size={18} /> 14 天 · 6 站</span>
        </div>
        <button className="primary-button no-export" type="button" onClick={onExport} disabled={exporting}>
          <Download size={19} /> {exporting ? '正在生成长图…' : '保存为 PNG 长图'}
        </button>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}travel-hero.png`} alt="" crossOrigin="anonymous" />
        <span className="stamp">云南<br />YUNNAN</span>
      </div>
    </header>
  )
}
