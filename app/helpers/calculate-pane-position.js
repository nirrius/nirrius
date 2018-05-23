// Calculates offset for each additional pane, creating a cascading effect.
const {min, max} = Math

const paneOffset = {
  x: 70,
  y: 50
}

export default function calculatePanePosition(n) {
  const {availWidth, availHeight} = window.screen

  return {
    x: max(min((n + 1) * paneOffset.x, availWidth - 700), 0),
    y: max(min((n + 1) * paneOffset.y, availHeight - 600), 0)
  }
}
