import { add, sub } from "./calc"

vi.mock("./calc.ts", () => ({
  add: vi.fn().mockReturnValue(100),
  sub: vi.fn().mockReturnValue(100),
}))

test("mockClear", () => {
  add(1, 2)
  const mockedAdd = vi.mocked(add)
  mockedAdd.mockClear() // スパイをリセット
  expect(mockedAdd).not.toHaveBeenCalledWith(1, 2)
  expect(mockedAdd(1, 2)).toBe(100)

  add(2, 3)
})

test("mockedAddは単一で、ファイル内の全テストで共有される", () => {
  const mockedAdd = vi.mocked(add)
  expect(mockedAdd).toHaveBeenCalledWith(2, 3) // 前回のテストで呼ばれたadd(2, 3)の履歴
  expect(mockedAdd(1, 2)).toBe(100)
})

test("mockReset", () => {
  const mockedAdd = vi.mocked(add)
  mockedAdd.mockReset() // スパイとスタブをリセット
  expect(mockedAdd).not.toHaveBeenCalledWith(1, 2)
  expect(mockedAdd(1, 2)).toBe(undefined)
})

test("mockRestore", () => {
  const mockedSub = vi.mocked(sub)
  mockedSub.mockReset()
  expect(mockedSub(1, 2)).toBe(undefined)
  mockedSub.mockRestore()
  expect(mockedSub(1, 2)).toBe(undefined)
})
