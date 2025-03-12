import { calc } from "./calc2"

// モジュールをモック化
vi.mock("./calc2")

test("", () => {
  // 型情報のみを変換（実行時の動作は変わらない）
  const mockedCalc = vi.mocked(calc)

  // モック化されたメソッドを呼び出し
  mockedCalc.add(1, 2)

  // モック関数のプロパティにアクセスできるようになる
  expect(mockedCalc.add).toHaveBeenCalledWith(1, 2)
})

test("", () => {
  // 型情報のみを変換（実行時の動作は変わらない）
  const mockedCalc = vi.mocked(calc)

  // モック化されたメソッドを呼び出し
  mockedCalc.add(1, 2)

  // モック関数のプロパティにアクセスできるようになる
  expect(calc.add).toHaveBeenCalledTimes(2)
})
