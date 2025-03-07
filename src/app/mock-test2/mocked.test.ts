import { add } from "./calc"

vi.mock("./calc")

test("", () => {
  vi.mocked(add).mockReturnValue(20)
  expect(add(1, 2)).toBe(20)
})

test("", () => {
  vi.mocked(add).mockReturnValue(10)
  expect(add(1, 2)).toBe(10)
})

test("", () => {
  vi.mocked(add).mockReturnValue(20)
  expect(add(1, 2)).toBe(20)
})
