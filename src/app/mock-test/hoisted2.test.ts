import { add } from "./calc"

// vi.mock("./calc.ts", () => ({
//   add: () => hoistedNum,
// }))

// test("test内のvi.hoistedで変数定義し、ファイルトップのvi.mockで参照する", () => {
//   const hoistedNum = vi.hoisted(() => 20)

//   expect(add(1, 2)).toBe(20)
// })

const getNum = vi.hoisted(() => vi.fn().mockReturnValue(20))

vi.mock("./calc.ts", () => ({
  add: () => getNum(),
}))

test("", () => {
  expect(add(1, 2)).toBe(20)
})

test("", () => {
  getNum.mockReturnValue(10)
  expect(add(1, 2)).toBe(10)
})

test("", () => {
  // expect(add(1, 2)).toBe(20)　// 失敗
  expect(add(1, 2)).toBe(10) // 成功　元の定義ではなく、一つ前の定義を参照する
})
