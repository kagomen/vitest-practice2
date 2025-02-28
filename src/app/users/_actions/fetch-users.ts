"use server"

import type { Users } from "../_utils/user-schema"

export const fetchUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data: Users = await res.json()
    return { success: true, data }
  } catch {
    return { success: false, data: [] }
  }
}
