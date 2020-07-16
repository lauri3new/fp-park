type Hand = 'rock' | 'paper' | 'scissors'

interface Magma<A> {
  (_:A, __:A): A
}
// where not associative ((a, b), c) === (a, (b, c))

const Throw: Magma<Hand> = (a: Hand, b: Hand): Hand => {
  if (a === 'rock' && b === 'scissors') return 'rock'
  if (a === 'rock' && b === 'rock') return 'rock'
  if (a === 'rock' && b === 'paper') return 'paper'
  if (a === 'paper' && b === 'scissors') return 'scissors'
  if (a === 'paper' && b === 'paper') return 'paper'
  if (a === 'paper' && b === 'rock') return 'paper'
  if (a === 'scissors' && b === 'scissors') return 'scissors'
  if (a === 'scissors' && b === 'rock') return 'rock'
  if (a === 'scissors' && b === 'paper') return 'scissors'
  return 'rock'
}

// no associativity

const a = Throw(Throw('paper', 'rock'), 'scissors')
const b = Throw(Throw('scissors', 'rock'), 'paper')

// no identity

const e = Throw('paper', 'rock')
const f = Throw('rock', 'rock')
const g = Throw('scissors', 'rock')

// no invertibility

const c = Throw('paper', 'rock')
const d = Throw('rock', 'paper')