type EquationT = [string, number]
type EquationsCountT = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
interface EquationDiffs {
  EasyEquation: () => EquationT
  MediumEquation: () => EquationT
  HardEquation: () => EquationT
  ImpossibleEquation: () => EquationT
}

type InputKey = number | '-' | 'Backspace'
type SessionWinner = string | 'bot' | null
type OrderKeys = 'correctAnswers' | 'answered' | 'answeredPercentage'
type OrderSequence = 'desc' | 'asc'
type OrderBy = Record<Exclude<OrderKeys, 'correctAnswers'>, OrderSequence> | Record<'correctAnswers', Record<'_count', OrderSequence>>
