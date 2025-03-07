// ref: https://azukiazusa.dev/blog/vitest-browser-test/

import { cleanup } from "@testing-library/react"
import { addTodo, getTodos } from "./localStorage"

beforeEach(() => {
  // テストごとに LocalStorage をクリア
  localStorage.clear()
  // jsdom のテストとは異なり、明示的に cleanup を呼び出す必要がある
  cleanup()
})

test("todo", () => {
  const todo = {
    id: 1,
    text: "Write unit tests",
  }

  addTodo(todo)

  expect(getTodos()).toStrictEqual([todo])
  expect(localStorage.getItem("todos")).toBe(JSON.stringify([todo]))
})
