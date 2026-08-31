export type TravelMode = 'flight' | 'train' | 'car' | 'walk' | 'rest' | 'explore' | 'unknown'

export type VisualTheme = 'lake' | 'rainforest' | 'tea' | 'village' | 'citywall'

export interface ScheduleItem {
  time?: string
  title: string
  detail?: string
  mode: TravelMode
  status?: 'confirmed' | 'planned' | 'pending'
}

export interface TravelDay {
  id: string
  date: string
  weekday: string
  dayNumber: number
  city: string
  route?: string
  summary: string
  visual: VisualTheme
  schedule: ScheduleItem[]
}

export interface RouteStop {
  city: string
  date: string
  x: number
  y: number
  labelX: number
  labelY: number
  mode?: TravelMode
}

export interface TodoItem {
  id: string
  title: string
  detail: string
  due?: string
  category: '交通' | '餐饮' | '游玩'
}

export type TodoFilter = 'all' | 'open' | 'done'
