var faker = require("faker");

const randomperson = () => {
  console.log(faker.name.findName());
  console.log(faker.internet.email());
  console.log(faker.address.streetName());
  console.log(faker.address.streetAddress());
  console.log(faker.address.state());
};

exports.randomperson = randomperson;
