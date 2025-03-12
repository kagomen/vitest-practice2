import { calc } from "./calc2"

// afterEach(() => {
//   vi.clearAllMocks()
// })

test("mockClear", () => {
  const spy = vi.spyOn(calc, "add").mockReturnValue(100)
  calc.add(1, 2)
  expect(calc.add).toHaveBeenCalledTimes(1)
  spy.mockClear()
  expect(calc.add).not.toHaveBeenCalledTimes(1)
  expect(calc.add(1, 2)).toBe(100)

  calc.add(2, 3)
})

test("", () => {
  expect(calc.add).toHaveBeenCalledTimes(2)
})

test("mockReset", () => {
  const spy = vi.spyOn(calc, "add")
  calc.add(1, 2)
  calc.add(1, 2)
  expect(spy).toHaveBeenCalledTimes(2)
  spy.mockReset()
  expect(spy).toHaveBeenCalledTimes(0)
  expect(calc.add(1, 2)).toBe(undefined)
})
