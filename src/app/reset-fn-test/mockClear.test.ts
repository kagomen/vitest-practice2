// const mockAdd = vi.fn().mockReturnValue(100)
// 上記だとhoistingによってvi.mockが先に実行されてしまうので、
// vi.hoistedを使用して変数を宣言する

import { add, sub } from "./calc"

const mockAdd = vi.hoisted(() => vi.fn().mockReturnValue(100))
const mockSub = vi.hoisted(() => vi.fn((a: number, b: number) => 100))

vi.mock("./calc.ts", () => ({
  add: mockAdd,
  sub: mockSub,
}))

test("mockClear", () => {
  add(1, 2)
  expect(add).toHaveBeenCalledWith(1, 2)
  expect(add(1, 2)).toBe(100)

  mockAdd.mockClear() // スパイをリセット
  expect(add).not.toHaveBeenCalledWith(1, 2)
  expect(add(1, 2)).toBe(100) // 返す値は変わらない
})

test("mockReset", () => {
  add(1, 2)
  mockAdd.mockReset() // スパイとスタブをリセット
  expect(add).not.toHaveBeenCalledWith(1, 2)
  expect(add(1, 2)).toBe(undefined) // undefinedを返す
})

test("mockRestore", () => {
  add(1, 2)
  mockAdd.mockRestore() // スパイをリセット、モックをモック作成時の状態に戻す
  expect(add).not.toHaveBeenCalledWith(1, 2)
  expect(add(1, 2)).toBe(undefined) // restoreしているがundefinedのまま
})

test("mockRestore", () => {
  sub(1, 2)

  mockSub.mockReset() // スパイとスタブをリセット
  expect(sub).not.toHaveBeenCalledWith(1, 2)

  expect(sub(1, 2)).toBe(100) // hoistedで巻き上げられているので、undefinedにはならない
})
