const fs = require('fs')
const { Worker } = require('worker_threads')

let table = []
let completed = 0

const startWorker = () => {
  const worker = new Worker('./generateRainbowTableWorker.js')
  worker.on('message', (message) => {
    if (typeof message === 'string') console.log(message)
    else {
      table = table.concat(message)
      completed += 1
    }
  })
  return worker
}

const checkIfFinished = () => {
  if (completed < 4) setTimeout(checkIfFinished, 1000)
  else {
    console.log(table)
    fs.writeFile('rainbowtable.txt', table, (err) => {
      if (err) {
        console.log(err)
        return
      }
      console.log('The file was saved!')
      console.timeEnd('table')
    })
  }
}

console.time('table')
Array(4).fill('').map(() => startWorker())
checkIfFinished()
