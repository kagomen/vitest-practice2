import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { Presentational } from "./presentational"

// vi.mock("./_actions/fetch", () => ({
//   fetchUserData: vi.fn().mockResolvedValue({
//     success: true,
//     data: [
//       {
//         id: 1,
//         name: "Leanne Graham",
//         username: "Bret",
//         email: "Sincere@april.biz",
//       },
//       {
//         id: 2,
//         name: "Ervin Howell",
//         username: "Antonette",
//         email: "Shanna@melissa.tv",
//       },
//     ],
//   }),
// }))

const users = [
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
]

test("form render", () => {
  render(<Presentational users={users} />)
  expect(screen.getByText("Leanne Graham")).toBeInTheDocument()
})
