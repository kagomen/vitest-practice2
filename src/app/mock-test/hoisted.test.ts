import { add } from "./calc"

test("vi.hoistedで変数定義をvi.mockより前に巻き上げ", () => {
  vi.mock("./calc.ts", () => ({
    add: () => hoistedNum,
  }))

  const hoistedNum = vi.hoisted(() => 20)

  expect(add(1, 2)).toBe(20)
})
