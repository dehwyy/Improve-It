//@ts-nocheck
import type { IEquationKind, ReturnEquationT } from '@/app/utils/tools/equations/types'

// This class should ALWAYS implement IEquationKind
export default class MultiplyEquation implements IEquationKind {
  constructor(private EquationBaseHelper: 'AnyEquationHelper') {}
  // I can use default helpers or create your own,
  // to create your own check equations/helpers/example.ts

  EasyEquation(): ReturnEquationT {
    return ['here should be equation as string!', 'and here should be result or answer as number!']
  } // [string, number]!!

  MediumEquation(): ReturnEquationT {
    // this will be same as this.EasyEquation but with higher difficulty
  }
  HardEquation(): ReturnEquationT {
    // If you don't implement any KindDifficulty such as this.ImpossibleEquation or other,
    // you should return  ['', 0]
  }
  ImpossibleEquation(): ReturnEquationT {
    const rFirst = this.EquationBaseHelper.getRandomFrom(100, 1000)
    const rSecond = this.EquationBaseHelper.getRandomFrom(100, 1000)
    return [`${rFirst} * ${rSecond} = `, rFirst * rSecond]
    // example, here we are using RandomModule as helper for generating random nums
    // but if you want to use helper you should inject random module in helper, NOT IN KIND!
    // like this: new MultiplyEquation(new EquationBaseHelper(RandomModule))
  }
}

// to create custom helper check equations/helpers/example.ts
