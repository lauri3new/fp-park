
export interface iterableIsh <A> {
  next: () => iterableIsh<A>
  value: A
}

export const natural = (n: number) => ({
  value: n + 1,
  next: () => natural(n + 1)
})

export const assert = <A>(name: string, input: iterableIsh<A>[], test: (_: A[]) => boolean, iterations?: number) => (): string => {
  const _iterations = iterations || 100
  const doTest = (n: number, a: iterableIsh<A>[]): string => {
    if (n === _iterations) return `'${name}' succeeded, for ${_iterations} inputs`
    if (!test(a.map(b => b.value))) return `'${name}' failed, with input '${a.map(a => a.value).join(', ')}'`
    return doTest(n + 1, a.map(a => a.next()))
  }
  return doTest(0, input)
}

type assertion = () => string

export const test = (name: string, ...assertion: assertion[]) => {
  const results = assertion.map(a => a())
  const positive = results.filter((a => a.match(' succeeded, for ')))
  const negative = results.filter((a => a.match(' failed, with input ')))
  console.log(`'${name}':`)
  results.forEach((a) => {
    if (a.match(' succeeded, for ')) {
      console.log("\x1b[31m", a)
    } else {
      console.log("\x1b[32m", a)
    }
  })
  console.log("\x1b[30m", `${results.length} tests ran, ${positive.length} succeeded and ${negative.length} failed.`)
  negative.forEach((a) => {
    console.log("\x1b[32m", a)
  })
  console.log("\x1b[30m")
}

// example

test(
  'my first test suite',
  assert('add1 should add 1', [natural(1)], ([n]) => n > 50 ? false : true),
  assert('add1 should add 1', [natural(1)], ([n]) => n > 5000 ? false : true)
)
