import type { VisualTheme } from '../types'

interface Props {
  theme: VisualTheme
  compact?: boolean
}

const themeLabels: Record<VisualTheme, string> = {
  lake: '昆明湖光',
  rainforest: '版纳雨林',
  tea: '普洱茶咖',
  village: '晋宁村野',
  citywall: '西安城墙',
}

function LakeScene() {
  return <>
    <circle cx="190" cy="55" r="28" fill="#e9b45b" opacity=".9" />
    <path d="M0 122 Q60 82 130 116 T260 104 T420 114 V220 H0Z" fill="#88a997" />
    <path d="M0 146 Q80 122 168 149 T330 142 T420 144 V220 H0Z" fill="#4a86a8" />
    <path d="M0 170 Q120 145 230 173 T420 166" fill="none" stroke="#f6f1e7" strokeWidth="4" opacity=".65" />
    <path d="M300 110 l38 -38 40 38zM306 110h66v40h-66z" fill="#d96c3b" />
    <path d="M318 96h42v54h-42z" fill="#f0d7a2" />
  </>
}

function RainforestScene() {
  return <>
    <rect width="420" height="220" fill="#dce5d8" />
    <circle cx="332" cy="55" r="28" fill="#e9b45b" />
    <path d="M0 150 Q90 75 170 142 T330 128 T420 110 V220 H0Z" fill="#4e826b" />
    <path d="M0 177 Q80 100 150 169 T290 151 T420 145 V220 H0Z" fill="#1f6f5f" />
    <path d="M92 210v-84M70 140q22-48 44 0M55 161q38-60 74 0" stroke="#1f2a24" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path d="M285 208v-104M255 124q30-58 60 0M242 151q46-70 86 0" stroke="#315f4a" strokeWidth="9" fill="none" strokeLinecap="round" />
  </>
}

function TeaScene() {
  return <>
    <rect width="420" height="220" fill="#eadfbd" />
    <circle cx="82" cy="55" r="25" fill="#d96c3b" opacity=".9" />
    {[0, 1, 2, 3].map((row) => (
      <path key={row} d={`M-20 ${125 + row * 24} Q80 ${92 + row * 24} 185 ${128 + row * 24} T440 ${116 + row * 24}`} fill="none" stroke={row % 2 ? '#1f6f5f' : '#4e826b'} strokeWidth="15" />
    ))}
    <path d="M295 55q0-18 18-18h42q18 0 18 18v44q0 28-39 28t-39-28z" fill="#f6f1e7" stroke="#1f2a24" strokeWidth="5" />
    <path d="M373 65h12q24 0 18 25t-30 16" fill="none" stroke="#1f2a24" strokeWidth="5" />
    <path d="M320 28q-11-15 2-26M344 28q12-15-1-26" stroke="#f6f1e7" strokeWidth="4" fill="none" opacity=".8" />
  </>
}

function VillageScene() {
  return <>
    <rect width="420" height="220" fill="#d8e5e2" />
    <circle cx="330" cy="50" r="26" fill="#e9b45b" />
    <path d="M0 130 90 68l82 65 80-38 168 44v81H0z" fill="#8ba68d" />
    <path d="M0 169 Q100 130 210 172 T420 160V220H0Z" fill="#6c9274" />
    <path d="M104 135l48-44 49 44v57h-97z" fill="#f6f1e7" />
    <path d="M91 138l61-58 64 58" fill="none" stroke="#d96c3b" strokeWidth="10" />
    <rect x="140" y="153" width="25" height="39" fill="#1f6f5f" />
  </>
}

function CityWallScene() {
  return <>
    <rect width="420" height="220" fill="#e9d5b2" />
    <circle cx="82" cy="48" r="25" fill="#d96c3b" />
    <path d="M0 178h420v42H0z" fill="#1f2a24" />
    <path d="M70 174h280v-66H70z" fill="#ad6544" />
    <path d="M120 108 210 51l90 57z" fill="#1f2a24" />
    <path d="M105 108h210l-16 18H121z" fill="#d96c3b" />
    <rect x="187" y="129" width="46" height="49" fill="#f0d7a2" />
    {[34, 89, 286, 341].map((x) => <rect key={x} x={x} y="151" width="28" height="27" fill="#ad6544" />)}
  </>
}

export function DestinationVisual({ theme, compact = false }: Props) {
  const scenes = { lake: <LakeScene />, rainforest: <RainforestScene />, tea: <TeaScene />, village: <VillageScene />, citywall: <CityWallScene /> }
  return (
    <figure className={`destination-visual ${compact ? 'destination-visual--compact' : ''}`} aria-label={themeLabels[theme]}>
      <svg viewBox="0 0 420 220" role="img" aria-hidden="true">{scenes[theme]}</svg>
      <figcaption>{themeLabels[theme]}</figcaption>
    </figure>
  )
}
