import { InitData } from "@tma.js/sdk"
import { NextRequest } from "next/server"

import validateInitialData from "@/lib/validateInitialData"
import { insertOneUser } from "@/services/drizzle/models/users"
import findFirstByTelegramUserId from "@/services/drizzle/models/users/findFirstByTelegramUserId"
import { NewUser } from "@/services/drizzle/schema"

export async function POST(request: NextRequest) {
  const data = (await request.json()) as {
    initRawData: string
    initData: {
      initData: InitData
    }
  }

  if (!data.initData || !data.initRawData) {
    return Response.json({ error: "Init data missing." })
  }

  const {
    initRawData,
    initData: { initData },
  } = data

  try {
    validateInitialData(initRawData)

    if (!initData.user?.id) throw new Error("Telegram user should have id.")

    const currentUser = await findFirstByTelegramUserId(initData.user.id)

    if (currentUser?.id) {
      console.info("User already exists.")

      // return early if user already exists
      return Response.json({ success: "ok" })
    }

    // store this user if it is a new user
    const newUser: NewUser = {
      telegramUserId: initData.user.id,
      username: initData.user.username,
      firstName: initData.user.firstName,
      lastName: initData.user.lastName,
    }

    await insertOneUser(newUser)
    console.info(`User with id ${newUser.telegramUserId} inserted.`)

    return Response.json({ success: "ok" })
  } catch (error) {
    console.error(error)

    return Response.json(
      { error: "Signature is invalid or missing." },
      {
        status: 400,
        statusText:
          error instanceof Error
            ? error.message
            : "Signature is invalid or missing.",
      }
    )
  }
}
