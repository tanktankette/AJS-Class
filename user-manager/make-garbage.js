const faker = require('faker')
const md5 = require('blueimp-md5')
const fetch = require('node-fetch')

fetch('https://test-c7f46.firebaseio.com/thing.json', {method: 'DELETE'}).then(() => {
  for (let i = 0; i < 100; i++) {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const email = faker.internet.email()
    const address = faker.address.streetAddress()
    const state = faker.address.state()
    const city = faker.address.city()
    const zip = faker.address.zipCode()
    const country = faker.address.country()
    const passwordHash = md5(faker.internet.password())

    const pkg = {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        address,
        state,
        city,
        zip,
        country,
        passwordHash
      })
    }
    fetch('https://test-c7f46.firebaseio.com/thing.json', pkg).then(console.log)
  }
})
