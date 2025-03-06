import { Suspense } from "react"
import { Container } from "./_components/container"

export default function UsersPage() {
  return (
    <>
      <h2>Users:</h2>

      <Suspense fallback={<div>loading...</div>}>
        <Container />
      </Suspense>
    </>
  )
}
