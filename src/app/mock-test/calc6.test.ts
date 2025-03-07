import { add } from "./calc"

const num = 20

test("ファイルトップで変数定義し、vi.mockで参照する", () => {
  vi.mock("./calc.ts", () => ({
    add: () => num,
  }))

  expect(add(1, 2)).toBe(20)
})
