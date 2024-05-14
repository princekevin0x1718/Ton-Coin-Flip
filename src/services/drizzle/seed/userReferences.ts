import { NewUserReferences } from "../schema"

function createRandomUserReference({
  userId,
  linkReference,
}: Pick<NewUserReferences, "userId" | "linkReference">): NewUserReferences {
  return {
    userId,
    linkReference,
  }
}

export default createRandomUserReference
