function currying(fn) {
  let param = []
  return function next(...arg) {
    if (arguments.length > 0) {
      param = [...param,...arg]
      return next
    } else {
      return fn.apply(null, param)
    }
  }
}

let add = currying(function () {
  let sum = 0
  for (let i of arguments) {
    sum += i
  }
  return sum
})  