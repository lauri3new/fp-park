// algebraic data types

// product type
const boolPair = (a: boolean, b: boolean) => [a, b]
// calculate space (inhabitants) by multiplying combinations
// 2 * 2
const boolTrio = (a: boolean, b: boolean, c: boolean) => [a, b, c]
// 2 * 2 * 2

// sum type
type height = 'short' | 'medium' | 'tall'
type weight = 'heavy' | 'light'
type size = height | weight
// calculate space (inhabitants) by summing combinations
// 3 + 2