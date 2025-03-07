import { add } from "./calc"

// ファクトリー関数やオプションを指定せずにmockすると、__mocks__ディレクトリを参照する
vi.mock("./calc.ts")

test("", () => {
  expect(add(1, 2)).toBe(100)
})
