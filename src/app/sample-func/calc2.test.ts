import { add } from "./calc"

// add = vi.fn()

// vi.spyOn(add)

// vi.mock("./calc.ts", { spy: true })
vi.mock(import("./calc.ts"), { spy: true })
// importを使用すればパスが変更された時に便利
// .ts 拡張子 を使用するために tsconfig.json にて `"allowImportingTsExtensions": true` を設定する必要あり

describe("", () => {
  test("", () => {
    expect(add(1, 2)).toBe(3)
  })
})
