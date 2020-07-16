
interface Monoid<A> {
  sum(_:A, __:A): A
}
// where identity exists
// e.g. number, empty string, empty array

// where associative ((a, b), c) === (a, (b, c))
// sum(sum(4, 5), 6) === sum(4, sum(5, 6))