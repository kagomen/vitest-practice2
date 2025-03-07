import { add } from "./calc.ts"

// add = vi.fn()

// vi.spyOn(add)

// vi.mock("./calc.ts", { spy: true })
vi.mock(import("./calc.ts"), { spy: true })
// importを使用すればパスが変更された時に便利
// .ts 拡張子 を使用するために tsconfig.json にて `"allowImportingTsExtensions": true` を設定する必要あり

describe("", () => {
  test("", () => {
    add(1, 2)
    expect(add(1, 2)).toBe(3) // spy関連のアサーションではないので、mockしなくてもテストが通る
    expect(add).toHaveBeenCalledWith(1, 2) // spy関連のアサーションなので、spyオプションをtrueにしないとエラーになる
  })
})
