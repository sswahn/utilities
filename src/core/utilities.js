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

export const pipe = (...fns) => {
  return arg => fns.reduce((prev, fn) => fn(prev), arg)
}

export const memoize = fn => {
  const cache = new Map()
  return (...args) => {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = fn(...args)
    cache.set(key, result)
    return result
  }
}

export const isObject = value => {
  return value !== null && typeof value === 'object'
}

export const curry = fn => {
  return function curried(...args) {
    return args.length >= fn.length
      ? fn(...args)
      : (...args2) => curried(
        [...args, ...args2]
    )
  }
}