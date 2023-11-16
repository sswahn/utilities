# Utilities
A collection of essential utility functions for modern JavaScript applications.  

## Functions  

### curry
Converts a multi-argument function into a curried function.  
```javascript
const curriedFunction = curry(func)
```  

### debounce  
```javascript
const debouncedFunction = debounce(func, 300)
```  

### deepClone
Deeply clones an object. Uses the structuredClone method if available, falling back to the JSON method.  
```javascript
const newObj = deepClone(oldObj)
```  

### deepMerge
Deeply merge two objects. 
```javascript
const newObj = deepMerge(target, source)
```  

### isObjectLiteral
Checks if a value is an object.  
```javascript
const check = isObjectLiteral(value)
```  

### memoize
Caches the result of expensive function calls to return cached results for repeated calls with the same inputs.  
```javascript
const memoizedFunction = memoize(func)
```  

### pipe
Creates a pipeline of functions. Useful for function composition.  
```javascript
const composedFunction = pipe(func1, func2, func3)
```  

### pubsub
Subscribe to events with callbacks, and publish events on demand.
```javascript
Const firePixel = () => console.log('pixel fired.')
const pixel = pubsub()
pixel.subscribe('new_event', firePixel)
pixel.publish('new_event', 'Hello cruel world!')
pixel.unsubscribe('new_event')
```  

### throttle
Rate-limits a function to run at most once every specified interval.  
```javascript
const throttledFunction = throttle(func, 300)
```


### License
This project is licensed under the MIT License.

