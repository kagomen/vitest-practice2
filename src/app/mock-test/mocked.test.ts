import { add } from "./calc"

// vi.mock("./calc.ts") // 不可

// vi.mock("./calc.ts", () => ({  // 可
//   add: vi.fn(),
// }))

vi.mock("./calc.ts", () => ({
  add: vi.fn().mockReturnValue(20),
}))

// beforeEach(() => {
//   // vi.clearAllMocks() // すべてのテストは通る
//   vi.resetAllMocks() // すべてのテストが通らない add関数はundefinedを返す関数に置き換えられる
//   // vi.restoreAllMocks() //
// })

test("ファイルトップで定義したモックの値を返す", () => {
  expect(add(1, 2)).toBe(20)
})

test("test内のmockedで定義したモックの値を返す", () => {
  vi.mocked(add).mockReturnValue(10)
  expect(add(1, 2)).toBe(10)
})

test("一つ前のtestのmockedで更新されたモックの値を参照する", () => {
  expect(add(1, 2)).toBe(10)
})
