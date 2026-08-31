import { toPng } from 'html-to-image'

function download(dataUrl: string, filename: string) {
  const link = document.createElement('a')
  link.download = filename
  link.href = dataUrl
  link.click()
}

export async function exportJournalAsPng(node: HTMLElement) {
  const maxCanvasEdge = 14_000
  const exportWidth = node.scrollWidth
  const exportHeight = node.scrollHeight
  const deviceRatio = window.devicePixelRatio || 1
  const safeRatio = Math.max(0.75, Math.min(1.5, deviceRatio, maxCanvasEdge / exportHeight))

  const dataUrl = await toPng(node, {
    width: exportWidth,
    height: exportHeight,
    cacheBust: true,
    pixelRatio: safeRatio,
    backgroundColor: '#f6f1e7',
    skipAutoScale: false,
    filter: (element) => !element.classList?.contains('no-export'),
    fetchRequestInit: { mode: 'cors', credentials: 'omit' },
    // The export sheet is kept off-screen during normal browsing. Reset the
    // cloned root position so its contents are painted into the PNG canvas.
    style: {
      position: 'relative',
      left: '0',
      top: '0',
      zIndex: 'auto',
      transform: 'none',
    },
  })

  download(dataUrl, '云南-西安旅行手账-2026.png')
}
