import { add } from "./calc"

vi.mock("./calc.ts")

test("mockedはspyできるか", () => {
  vi.mocked(add).mockReturnValue(20)
  add(1, 3)

  expect(add).toHaveBeenCalledWith(1, 3)
})
