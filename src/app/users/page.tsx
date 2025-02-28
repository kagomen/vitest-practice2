import { Suspense } from "react"
import { Container } from "./_components/container"

export default function UsersPage() {
  return (
    <>
      <h1>Users:</h1>
      <Suspense fallback={<div>loading...</div>}>
        <Container />
      </Suspense>
    </>
  )
}
