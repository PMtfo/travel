import type { RouteStop, TravelDay } from '../types'

export const tripDays: TravelDay[] = [
  {
    id: 'sep-24', date: '09.24', weekday: '周四', dayNumber: 1, city: '北京 → 昆明',
    summary: '夜航启程，落地春城', visual: 'lake', route: '北京首都 T3 → 昆明长水',
    schedule: [
      { time: '21:30', title: '搭乘昆明航空 KY8268', detail: '北京首都机场 T3 起飞', mode: 'flight', status: 'confirmed' },
      { time: '次日 01:10', title: '抵达昆明长水机场', detail: '入住昆明华顾酒店，共 1 晚', mode: 'flight', status: 'confirmed' },
    ],
  },
  {
    id: 'sep-25', date: '09.25', weekday: '周五', dayNumber: 2, city: '昆明 · 晋宁',
    summary: '翠湖慢游，回晋宁团聚', visual: 'lake',
    schedule: [
      { title: '翠湖散步', detail: '城市里的秋日水岸', mode: 'walk', status: 'planned' },
      { title: '翠湖宾馆中餐厅', detail: '其他用餐地点待确认', mode: 'explore', status: 'planned' },
      { title: '返回晋宁过中秋', detail: '住宿安排待确认', mode: 'car', status: 'planned' },
    ],
  },
  {
    id: 'sep-26', date: '09.26', weekday: '周六', dayNumber: 3, city: '昆明 → 西双版纳',
    summary: '从春城驶入热带雨林', visual: 'rainforest', route: '昆明南 → 西双版纳',
    schedule: [
      { title: '高铁前往西双版纳', detail: '车次待确认；预计 09.12 14:30 开售', mode: 'train', status: 'pending' },
      { time: '下午', title: '曼听公园 → 总佛寺', detail: '步行串联两处人文地标', mode: 'walk', status: 'planned' },
      { time: '晚上', title: '星光夜市', detail: '逛夜市，当天饭店待定', mode: 'explore', status: 'planned' },
      { title: '入住西双版纳洲际度假酒店', detail: '09.26—09.29，共 3 晚', mode: 'rest', status: 'confirmed' },
    ],
  },
  {
    id: 'sep-27', date: '09.27', weekday: '周日', dayNumber: 4, city: '西双版纳',
    summary: '植物王国与傣乡风物', visual: 'rainforest',
    schedule: [
      { title: '中科院热带植物园', detail: '游览顺序与往返交通待安排', mode: 'explore', status: 'planned' },
      { title: '傣族园', detail: '体验傣族村寨与水岸风光', mode: 'explore', status: 'planned' },
    ],
  },
  {
    id: 'sep-28', date: '09.28', weekday: '周一', dayNumber: 5, city: '西双版纳',
    summary: '留一天给山野', visual: 'rainforest',
    schedule: [
      { title: '雨林徒步', detail: '路线、往返交通与装备待确认', mode: 'walk', status: 'pending' },
      { title: '西双版纳洲际度假酒店', detail: '徒步后返回休息', mode: 'rest', status: 'confirmed' },
    ],
  },
  {
    id: 'sep-29', date: '09.29', weekday: '周二', dayNumber: 6, city: '西双版纳 → 普洱',
    summary: '从雨林转入茶咖之城', visual: 'tea', route: '西双版纳 → 普洱',
    schedule: [
      { time: '中午', title: '前往普洱', detail: '原备注约 40 分钟，交通方式与耗时待核实', mode: 'train', status: 'pending' },
      { title: '入住普洱德庭酒店（茶山店）', detail: '09.29—10.01，共 2 晚', mode: 'rest', status: 'confirmed' },
      { title: '戴家巷 → 思茅老街 → 老爪箐', detail: '抵达休息后，慢逛老城街巷', mode: 'walk', status: 'planned' },
    ],
  },
  {
    id: 'sep-30', date: '09.30', weekday: '周三', dayNumber: 7, city: '普洱',
    summary: '一杯咖啡，一盏普洱', visual: 'tea',
    schedule: [
      { title: '选择一座咖啡庄园', detail: '具体庄园、预约方式待确认', mode: 'explore', status: 'pending' },
      { title: '选择一座茶庄园', detail: '安排茶园体验与往返交通', mode: 'explore', status: 'pending' },
    ],
  },
  {
    id: 'oct-01', date: '10.01', weekday: '周四', dayNumber: 8, city: '普洱 → 昆明 · 晋宁',
    summary: '返程穿过滇中山色', visual: 'village', route: '普洱 → 昆明南 → 晋宁',
    schedule: [
      { title: '普洱前往昆明南', detail: '交通方式、班次与时间待确认', mode: 'train', status: 'pending' },
      { title: '前往晋宁', detail: '抵达后休息，住宿待确认', mode: 'car', status: 'planned' },
    ],
  },
  {
    id: 'oct-02', date: '10.02', weekday: '周五', dayNumber: 9, city: '晋宁',
    summary: '在滇池南岸停一停', visual: 'village',
    schedule: [{ title: '休息日', detail: '给长途旅行留出呼吸感', mode: 'rest', status: 'planned' }],
  },
  {
    id: 'oct-03', date: '10.03', weekday: '周六', dayNumber: 10, city: '晋宁',
    summary: '不赶路，慢慢生活', visual: 'village',
    schedule: [{ title: '休息日', detail: '自由安排，保持行程弹性', mode: 'rest', status: 'planned' }],
  },
  {
    id: 'oct-04', date: '10.04', weekday: '周日', dayNumber: 11, city: '晋宁 → 昆明',
    summary: '回到春城，准备北上', visual: 'lake', route: '晋宁 → 昆明',
    schedule: [
      { time: '白天', title: '晋宁休息', detail: '前往昆明的时间与交通待确认', mode: 'rest', status: 'planned' },
      { title: '入住昆明华顾酒店', detail: '10.04—10.05，共 1 晚', mode: 'rest', status: 'confirmed' },
    ],
  },
  {
    id: 'oct-05', date: '10.05', weekday: '周一', dayNumber: 12, city: '昆明 → 西安',
    summary: '跨越山河，抵达长安', visual: 'citywall', route: '昆明长水 → 西安咸阳 T5',
    schedule: [
      { time: '07:20', title: '搭乘东方航空 MU5727', detail: '昆明长水机场起飞', mode: 'flight', status: 'confirmed' },
      { time: '09:35', title: '抵达西安咸阳机场 T5', detail: '抵达后办理入住', mode: 'flight', status: 'confirmed' },
      { title: '入住西安丽思卡尔顿酒店', detail: '10.05—10.07，共 2 晚', mode: 'rest', status: 'confirmed' },
    ],
  },
  {
    id: 'oct-06', date: '10.06', weekday: '周二', dayNumber: 13, city: '西安',
    summary: '长安一日，路线待写', visual: 'citywall',
    schedule: [{ title: '西安市内活动', detail: '景点、餐厅与市内交通待安排', mode: 'explore', status: 'pending' }],
  },
  {
    id: 'oct-07', date: '10.07', weekday: '周三', dayNumber: 14, city: '西安 → 北京',
    summary: '带着秋意回家', visual: 'citywall', route: '西安 → 北京',
    schedule: [
      { title: '西安丽思卡尔顿酒店退房', detail: '结束 2 晚住宿', mode: 'rest', status: 'confirmed' },
      { time: '12:00？', title: '返回北京', detail: '返程方式、班次及原备注含义待确认', mode: 'unknown', status: 'pending' },
    ],
  },
]

export const routeStops: RouteStop[] = [
  { city: '北京', date: '09.24', x: 676, y: 74, labelX: 696, labelY: 60, mode: 'flight' },
  { city: '昆明', date: '09.25', x: 382, y: 274, labelX: 315, labelY: 254, mode: 'car' },
  { city: '晋宁', date: '09.25', x: 404, y: 312, labelX: 424, labelY: 338, mode: 'train' },
  { city: '西双版纳', date: '09.26', x: 333, y: 405, labelX: 220, labelY: 428, mode: 'train' },
  { city: '普洱', date: '09.29', x: 370, y: 363, labelX: 390, labelY: 389, mode: 'train' },
  { city: '昆明', date: '10.01', x: 382, y: 274, labelX: 315, labelY: 254, mode: 'car' },
  { city: '晋宁', date: '10.01—04', x: 404, y: 312, labelX: 424, labelY: 338, mode: 'flight' },
  { city: '西安', date: '10.05', x: 548, y: 170, labelX: 568, labelY: 158 },
  { city: '北京', date: '10.07', x: 676, y: 74, labelX: 696, labelY: 60 },
]
