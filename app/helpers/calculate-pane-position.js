// Calculates offset for each additional pane, creating a cascading effect.

const paneOffset = {
  x: 20,
  y: 25
}

export default function calculatePanePosition(n) {
  const {availWidth, availHeight} = window.screen

  return {
    x: Math.min((n + 1) * paneOffset.x, availWidth - 700),
    y: Math.min((n + 1) * paneOffset.y, availHeight - 600)
  }
}
