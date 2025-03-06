import { add, sub } from "./calc"

vi.mock("./calc.ts", async (importOriginal) => {
  const mod = await importOriginal<typeof import("./calc.ts")>()
  return { ...mod, add: () => 100 }
})

test("calc", () => {
  expect(add(2, 1)).toBe(100)
  expect(sub(2, 1)).toBe(1)
})
