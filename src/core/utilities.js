export const debounce = (fn, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

export const throttle = (fn, limit) => {
  let lastCall = 0
  return (...args) => {
    const now = Date.now()
    if (now - lastCall < limit) {
      return
    }
    lastCall = now
    fn(...args)
  }
}

export const deepClone = obj => {
  return window.structuredClone 
    ? structuredClone(obj) 
    : JSON.parse(JSON.stringify(obj))
}
