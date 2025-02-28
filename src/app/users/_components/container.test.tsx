import { render, screen } from "@testing-library/react"
import { expect, test, vi } from "vitest"
import { Container } from "./container"

vi.mock("../_actions/fetch-users", () => ({
  fetchUsers: vi.fn().mockResolvedValue({
    success: true,
    data: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
      },
    ],
  }),
}))

test("render container", async () => {
  render(await Container())

  expect(screen.getByText("Leanne Graham")).toBeInTheDocument()
})
