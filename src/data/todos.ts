import type { TodoItem } from '../types'

export const initialTodos: TodoItem[] = [
  { id: 'train-banna', title: '购买昆明南至西双版纳高铁票', detail: '确认车次和发车时间', due: '09.12 14:30 开售', category: '交通' },
  { id: 'restaurant-kunming', title: '确认 09.25 餐厅', detail: '翠湖周边或晋宁用餐', category: '餐饮' },
  { id: 'restaurant-banna', title: '确认 09.26 晚餐', detail: '星光夜市附近', category: '餐饮' },
  { id: 'banna-route', title: '安排 09.27 景点顺序及交通', detail: '植物园与傣族园往返方案', category: '游玩' },
  { id: 'hiking', title: '确认徒步路线与装备', detail: '路线难度、接驳和防雨装备', category: '游玩' },
  { id: 'banna-puer', title: '核实西双版纳至普洱交通', detail: '确认“40 分钟”的方式与实际耗时', category: '交通' },
  { id: 'estates', title: '预约咖啡庄园与茶庄园', detail: '各选择一座并确认接待时间', category: '游玩' },
  { id: 'puer-kunming', title: '确认普洱至昆明南交通', detail: '班次、时间和到晋宁接驳', category: '交通' },
  { id: 'xian-day', title: '安排 10.06 西安市内行程', detail: '景点、餐厅和市内交通', category: '游玩' },
  { id: 'return-beijing', title: '确认 10.07 返京班次', detail: '核实“12:00 回”的具体含义', category: '交通' },
]
