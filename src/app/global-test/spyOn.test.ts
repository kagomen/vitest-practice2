// ref: https://runthatline.com/vitest-mock-localstorage/

import { addTodo, getTodos } from "./localStorage"

describe("Todos Service", () => {
  const getItemSpy = vi.spyOn(Storage.prototype, "getItem")
  const setItemSpy = vi.spyOn(Storage.prototype, "setItem")

  afterEach(() => {
    localStorage.clear()
    getItemSpy.mockClear()
    setItemSpy.mockClear()
  })

  describe("getTodos", () => {
    test("gets todos from LocalStorage", () => {
      const todo = {
        id: 1,
        text: "Write unit tests",
      }

      localStorage.setItem("todos", JSON.stringify([todo]))

      expect(getTodos()).toStrictEqual([todo])
      expect(getItemSpy).toHaveBeenCalledWith("todos")
    })
  })

  describe("addTodo", () => {
    test("adds new todo", () => {
      const todo = {
        id: 2,
        text: "Write more unit tests",
      }

      addTodo(todo)

      expect(setItemSpy).toHaveBeenCalledWith("todos", JSON.stringify([todo]))
      expect(getTodos()).toStrictEqual([todo])
    })
  })
})
