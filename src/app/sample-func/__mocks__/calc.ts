function add(a: number, b: number) {
  console.log(`a:${a} b:${b}`)
  return 100
}

function sub(a: number, b: number) {
  console.log(`a:${a} b:${b}`)
  return 100
}

vi.fn()

export { add, sub }
