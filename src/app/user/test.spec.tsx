import { render, screen } from "@testing-library/react"
import { userEvent } from "@vitest/browser/context"
// import userEvent from "@testing-library/user-event"
import UserPage from "./page"

test("画面表示", () => {
  render(<UserPage />)

  expect(screen.getByText("ID: ?")).toBeInTheDocument()
})

test("1を入力したときにID:1のユーザーが表示される", async () => {
  render(<UserPage />)

  // const user = userEvent.setup()

  const textbox = screen.getByRole("textbox", { name: /user ID/i })
  await userEvent.type(textbox, "1")
  expect(await screen.findByText("ID: 1")).toBeInTheDocument()
})
