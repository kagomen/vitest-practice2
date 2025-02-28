import { fetchUsers } from "../_actions/fetch-users"
import { Presentational } from "./presentational"

export const Container = async () => {
  const result = await fetchUsers()

  if (!result.success) {
    throw new Error("failed fetching users")
  }

  const users = result.data

  return (
    <>
      <Presentational users={users} />
    </>
  )
}
