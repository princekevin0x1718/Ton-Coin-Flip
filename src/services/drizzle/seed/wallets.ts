import { faker } from "@faker-js/faker"

import { NewWallet } from "../schema"

function createRandomWallet({ userId }: Pick<NewWallet, "userId">): NewWallet {
  return {
    userId,
    rawAddress: faker.string.hexadecimal({ length: 64 }).split("0x")[1],
    address: faker.string.hexadecimal({ length: 48 }),
    publicKey: faker.string.hexadecimal({ length: 64 }),
    chain: faker.number.int({ min: -4, max: 20 }).toString(),
    walletStateInit: faker.string.alphanumeric(),
    devicePlatform: faker.word.noun(),
    deviceAppName: faker.word.noun(),
    deviceAppVersion: faker.number.float({ min: 0.2, max: 4 }).toString(),
    deviceMaxProtocolVersion: faker.number.int({ max: 10 }),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
  }
}

export default createRandomWallet
