// 実行環境：jsdom

// import { add } from "./calc"

// vi.doMock("./calc.ts", () => ({
//   add: () => 30,
// }))

// test("ファイルトップのdoMockで定義したaddが参照される", async () => {
//   const { add } = await import("./calc.ts")
//   expect(add(1, 2)).toBe(30)
// })

// test("test内のdoMockで定義したaddが参照される", async () => {
//   vi.doMock("./calc.ts", () => ({
//     add: () => 20,
//   }))
//   const { add } = await import("./calc.ts")
//   expect(add(1, 2)).toBe(20)
// })

// test("一つ前のtest内のdoMockで更新したaddが参照される", async () => {
//   const { add } = await import("./calc.ts")
//   expect(add(1, 2)).toBe(20)
// })

// test("動的importしていないので、ファイルトップで静的importしたaddが参照される", async () => {
//   expect(add(1, 2)).toBe(3)
// })

// 実行環境：chrome

vi.doMock("./calc.ts", () => ({
  add: () => 10,
}))

test("ファイルトップのdoMockで定義したモックが参照される", async () => {
  const { add } = await import("./calc.ts")
  expect(add(1, 2)).toBe(10)
})

test("test内のdoMockで定義したモックが参照されない", async () => {
  vi.doMock("./calc.ts", () => ({
    add: () => 20,
  }))
  const { add } = await import("./calc.ts")
  expect(add(1, 2)).toBe(10)
})
