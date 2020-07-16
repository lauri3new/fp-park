
interface SemiGroup<A> {
  sum(_:A, __:A): A
}

// where associative ((a, b), c) === (a, (b, c))
// sum(sum(4, 5), 6) === sum(4, sum(5, 6))

// where identity dosnt exist
// e.g. number, empty string, empty array

// e.g. non null strings, addition natural numbers