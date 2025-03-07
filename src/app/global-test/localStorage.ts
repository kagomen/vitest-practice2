type Todo = {
  id: number
  text: string
}
type Todos = Todo[]

export const getTodos = (): Todos =>
  JSON.parse(localStorage.getItem("todos") || "[]")

export const addTodo = (todo: Todo) => {
  const todos = getTodos()

  todos.push(todo)

  localStorage.setItem("todos", JSON.stringify(todos))
}
