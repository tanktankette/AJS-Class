const debounce = (callback, timeout) => {
  let time = Date.now()
  const func = function (message) {
    if (Date.now() > time + timeout) {
      callback(message)
    } else {
      console.log('not yet')
    }
    time = Date.now()
  }
  return func
}

const func = debounce((message) => console.log(message), 100)
const func2 = debounce((message) => console.log(message), 100)

func('func1')
setTimeout(() => func('func1'), 200)
setTimeout(() => func('func1'), 400)
setTimeout(() => func('func1'), 450)
setTimeout(() => func2('func2'), 460)
