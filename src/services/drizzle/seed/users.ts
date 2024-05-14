import { faker } from "@faker-js/faker"

import { NewUser } from "../schema"

function createRandomUser(): NewUser {
  return {
    telegramUserId: faker.number.int({ min: 1, max: 10_000 }),
    username: faker.internet.userName(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
  }
}

export default createRandomUser
