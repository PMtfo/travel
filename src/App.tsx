'use client'

import { useRef, useState } from 'react'
import { Compass, Info, ShieldCheck } from 'lucide-react'
import { Hero } from './components/Hero'
import { ExportSheet } from './components/ExportSheet'
import { RouteMap } from './components/RouteMap'
import { TodoList } from './components/TodoList'
import { TripTimeline } from './components/TripTimeline'
import { exportJournalAsPng } from './lib/exportPng'
import { useTodos } from './hooks/useTodos'

export default function App() {
  const journalRef = useRef<HTMLDivElement>(null)
  const [exporting, setExporting] = useState(false)
  const [notice, setNotice] = useState('')
  const todoModel = useTodos()

  const handleExport = async () => {
    const exportNode = journalRef.current?.querySelector<HTMLElement>('.export-sheet')
    if (!exportNode || exporting) return
    setExporting(true)
    setNotice('')
    try {
      await document.fonts?.ready
      await exportJournalAsPng(exportNode)
      setNotice('PNG 已生成并开始下载。')
    } catch (error) {
      console.error(error)
      setNotice('导出失败，请在最新版 Chrome、Edge 或 Safari 中重试。')
    } finally {
      setExporting(false)
    }
  }

  return (
    <>
      <a className="skip-link" href="#journal">跳到行程正文</a>
      <Hero exporting={exporting} onExport={handleExport} />
      {notice && <div className="export-notice no-export" role="status"><Info size={17} /> {notice}</div>}
      <main id="journal" className="journal shell">
        <div className="journal__masthead">
          <span><Compass size={18} /> 云南—西安</span>
          <strong>2026 秋日旅行手账</strong>
          <span><ShieldCheck size={18} /> 公开版</span>
        </div>
        <RouteMap />
        <TripTimeline />
        <TodoList model={todoModel} />
        <footer className="footer">
          <p>一路向秋 · 2026</p>
          <span>公开版本仅展示行程，不包含旅客姓名、订单截图或其他身份信息。</span>
        </footer>
      </main>
      <div ref={journalRef} className="export-sheet-wrap"><ExportSheet completed={todoModel.completed} /></div>
    </>
  )
}
