import * as calc from "./calc"

afterEach(() => {
  vi.clearAllMocks()
})

test("mockClear", () => {
  const spy = vi.spyOn(calc, "add").mockReturnValue(100)
  calc.add(1, 2)
  expect(calc.add).toHaveBeenCalledWith(1, 2)
  spy.mockClear()
  expect(calc.add).not.toHaveBeenCalledWith(1, 2)
  expect(calc.add(1, 2)).toBe(100)

  calc.add(2, 3)
})

test("mockedAddは単一で、ファイル内の全テストで共有される", () => {
  expect(calc.add).not.toHaveBeenCalledWith(2, 3) // 前回のテストで呼ばれたadd(2, 3)の履歴が残る
})

// ブラウザモードでは、アサーションでオブジェクトとして扱うとエラーが発生するためテストが通らなくなる
// TypeError: Cannot redefine property: add
