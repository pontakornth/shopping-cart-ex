const fs = require('fs')
const faker = require('faker')

const fakeItemsDatas = Array(99)
  .fill({})
  .map((_, index) => {
    return {
      id: index,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      imageUrl: faker.image.image(),
      description: faker.lorem.sentence()
    }
  })

fs.writeFileSync(
  'fake_items.json',
  JSON.stringify({ items: fakeItemsDatas }, null, 2)
)
module.exports = () => {
  return {
    items: fakeItemsDatas
  }
}
