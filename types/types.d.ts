type EquationT = [string, number]
type EquationsCountT = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
interface EquationDiffs {
  EasyEquation: () => EquationT
  MediumEquation: () => EquationT
  HardEquation: () => EquationT
  ImpossibleEquation: () => EquationT
}
