/**
 * Behaves the same as setInterval except uses requestAnimationFrame() where possible for better performance
 * @param {function} func The callback function
 * @param {int} delay The delay in milliseconds
 */
export function requestInterval(func, delay) {
  let start = new Date().getTime()
  const handle = {}

  function loop() {
    const current = new Date().getTime()
    const delta = current - start

    if (delta >= delay) {
      func()
      start = new Date().getTime()
    }

    handle.value = window.requestAnimationFrame(loop)
  }

  handle.value = window.requestAnimationFrame(loop)
  return handle
}

/**
 * Behaves the same as clearInterval except uses cancelRequestAnimationFrame() where possible for better performance
 * @param {int|object} func The callback function
 */
export function clearRequestInterval(handle) {
  window.cancelAnimationFrame(handle.value)
}
