"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export type User = {
  id: number | string
  name: string
  email: string
}

const defaultUser: User = {
  id: "?",
  name: "?",
  email: "?",
}

async function fetchUser(id: string) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user: User = await res.json()
    return user
  } catch {
    return defaultUser
  }
}

export default function UserPage() {
  const [id, setId] = useState<string | null>(null)
  const [user, setUser] = useState<User>(defaultUser)

  useEffect(() => {
    if (id) {
      ;(async () => {
        const user = await fetchUser(id)
        setUser(user)
      })()
    }
  }, [id])

  return (
    <>
      <label htmlFor="user-id">input user ID: </label>
      <input type="text" id="user-id" onChange={(e) => setId(e.target.value)} />
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <Link href="/">← back</Link>
    </>
  )
}
