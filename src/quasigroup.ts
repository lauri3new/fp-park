
interface QuasiGroup<A> {
  sum(_:A, __:A): A
}

// where identity dosnt exist
// e.g. number, empty string, empty array

// e.g. non null strings, addition natural numbers