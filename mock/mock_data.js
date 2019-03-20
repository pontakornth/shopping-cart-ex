const faker = require('faker')
module.exports = () => {
  return {
    items: Array(99)
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
  }
}
