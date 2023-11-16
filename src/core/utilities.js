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

function deepMerge(target, source) {
  Object.keys(source).forEach(key => {
    (source[key] instanceof Object && key in target)
      ? deepMerge(target[key], source[key])
      : target[key] = source[key]
  })
  return target
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

export const isObjectLiteral = value => {
  return typeof value === 'object' && value !== null && !Array.isArray(value) && value.constructor === Object
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


export const pubsub = () => {
  let subs = {}
  
  const subscribe = (event, callback) => {
    if (!subs[event]) {
      subs[event] = []
    }
    subs[event] = [ ...subs[event], callback ]
  }
  
  const unsubscribe = event => {
    delete subs[event]
  }
  
  const publish = (event, data) => {
    if (subs[event]) {
      subs[event].forEach(callback => callback(data))
    }
  }
  return { subscribe, unsubscribe, publish }
}

const pixel = pubsub()
pixel.subscribe('new_event', test)
pixel.publish('new_event', 'Hello cruel world!')
pixel.unsubscribe('new_event')
