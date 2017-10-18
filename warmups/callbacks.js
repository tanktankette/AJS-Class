const MAX = 100
const FAILURE_RATE = 0.1

function maybeFail () {
  if (Math.random() < FAILURE_RATE) {
    throw new Error('bad stuff happened')
  }
}

function ApiCall () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        maybeFail()
        const randNum = Math.floor(Math.random() * MAX) + 1
        resolve({
          status: 200,
          body: `{"data":[{"id": 1, "type": "random", "attributes": { "value": ${randNum} }}]}`
        })
      } catch (e) {
        reject(new Error('oops, it didnt work out'))
      }
    }, 500)
  })
}

function JsonParser (response) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (response.status !== 200) {
        reject(new Error('invalid response-code'))
      }
      resolve(JSON.parse(response.body))
    }, 100)
  })
}

function getTheValue (serverResponseObject) {
  return serverResponseObject.data[0].attributes.value
}

const addNumbers = (n) => {
  Promise.all(Array(n).fill(ApiCall).map((v)=>v()))
    .then(([...responses]) => {
      return Promise.all(responses.map((response) => JsonParser(response)))
    })
    .then(([...parsedDataList]) => {
      return parsedDataList.reduce((total, parsedData) => {
        return total + getTheValue(parsedData)
      }, 0)
    })
    .then((finalValue) => console.log(finalValue))
    .catch(err => {
      console.log('look what happened:', err)
    })
}

addNumbers(10)
addNumbers(3)