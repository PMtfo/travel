import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: '一路向秋｜云南—西安旅行手账',
  description: '云南至西安的 14 天公开旅行手账：路线、每日行程、可操作待办与 PNG 长图导出。',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
