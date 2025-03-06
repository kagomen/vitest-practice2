test("test内で変数定義し、vi.mockで参照する", () => {
  const num = 20
  vi.mock("./calc.ts", () => ({
    add: () => num, // 参照できない
  }))

  // expect(add(1, 2)).toBe(20)
})
