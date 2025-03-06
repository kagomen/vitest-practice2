import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test } from "vitest"
import UserPage from "./page"

test("画面表示", () => {
  render(<UserPage />)

  expect(screen.getByText("ID: ?")).toBeInTheDocument()
})

test("1を入力したときにID:1のユーザーが表示される", async () => {
  render(<UserPage />)

  const user = userEvent.setup()

  const textbox = screen.getByRole("textbox", { name: /user ID/i })
  await user.type(textbox, "1")
  expect(await screen.findByText("ID: 1")).toBeInTheDocument()
})
