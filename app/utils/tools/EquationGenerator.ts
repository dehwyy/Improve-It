import RandomSimple from "@/app/utils/tools/RandomSimple";
import {Diffs, Modes} from "@/types/export";


enum Signs {
    plus = "+",
    minus = "-"
}

class EquationGenerator {
    protected rand(...args: Parameters<typeof RandomSimple.getRandomInRange>): ReturnType<typeof RandomSimple.getRandomInRange> {
        return RandomSimple.getRandomInRange(...args)
    }

    protected getRandomSign(): Signs {
       return RandomSimple.getRandomFromArray<Signs>([Signs.plus, Signs.minus])
    }

    protected signMaker<T = number, R = T>(minusCb: () => T, plusCb: () => R): {sign: string, res: T | R} {
        const sign = this.getRandomSign()
        let equalsNumber: T | R
        if (sign === Signs.minus) {
            equalsNumber = minusCb()
        } else {
            equalsNumber = plusCb()
        }
        return {
            res: equalsNumber,
            sign
        }
    }

}

class EquationHard extends EquationGenerator implements EquationDiffs{
    EasyEquation(): EquationT {
        const x = this.rand(1, 5)
        const randomK = this.rand(2, 5)
        const randomConstant = this.rand(1, 50, randomK)
        const {res: equalsNumber, sign} = this.signMaker(
            () => x * randomK - randomConstant,
            () => x * randomK + randomConstant
        )
        return [`${randomK}x ${sign} ${randomConstant} = ${equalsNumber} `, x]
    }
    MediumEquation(): EquationT {
        const x = this.rand(1, 10)
        const randomK = this.rand(3, 10)
        const randomConstant = this.rand(1, 100, randomK)
        const {res: equalsNumber, sign} = this.signMaker(
            () => x * randomK - randomConstant,
            () => x * randomK + randomConstant
        )
        return [`${randomK}x ${sign} ${randomConstant} = ${equalsNumber} `, x]
    }
    HardEquation(): EquationT {
        return ["", 0]
    }
    ImpossibleEquation(): EquationT {
        return ["", 0]
    }
}

class EquationSpeed extends EquationGenerator implements EquationDiffs{
    EasyEquation(): EquationT {
        const rFirst = this.rand(20, 100)
        const rSecond = this.rand(20, 100)
        const {sign, res} = this.signMaker(
            () => rFirst - rSecond,
            () => rFirst + rSecond
        )
        return [`${rFirst} ${sign} ${rSecond} = `, res]
    }

    MediumEquation(): EquationT {
        const rFirst = this.rand(20, 1000)
        const rSecond = this.rand(20, 1000)
        const {sign, res} = this.signMaker(
            () => rFirst - rSecond,
            () => rFirst + rSecond
        )
        return [`${rFirst} ${sign} ${rSecond} = `, res]
    }
    HardEquation(): EquationT {
        const rFirst = this.rand(20, 100000)
        const rSecond = this.rand(20, 100000)
        const {sign, res} = this.signMaker(
            () => rFirst - rSecond,
            () => rFirst + rSecond
        )
        return [`${rFirst} ${sign} ${rSecond} = `, res]
    }
    ImpossibleEquation(): EquationT {
        const rFirst = this.rand(2000, 10000000)
        const rSecond = this.rand(2000, 10000000)
        const {sign, res} = this.signMaker(
            () => rFirst - rSecond,
            () => rFirst + rSecond
        )
        return [`${rFirst} ${sign} ${rSecond} = `, res]
    }
}

class EquationInjection implements EquationDiffs{
    constructor(
        private EqGenerator: EquationDiffs
    ) {}

    EasyEquation() {
        return this.EqGenerator.EasyEquation()
    }

    MediumEquation() {
        return this.EqGenerator.MediumEquation()
    }
    HardEquation() {
        return this.EqGenerator.HardEquation()
    }
    ImpossibleEquation() {
        return this.EqGenerator.ImpossibleEquation()
    }

}

export default function* getEquations(mode: Modes, diff: Diffs = 0, count = 1): Generator<EquationT, void> {
    let localCount = 0
    const Eqs = mode == Modes.speed
        ? new EquationInjection(new EquationSpeed())
        : new EquationInjection(new EquationHard())
    while (localCount < count) {
        localCount++
        switch (diff) {
            case Diffs.Easy:
                yield Eqs.EasyEquation()
                break
            case Diffs.Medium:
                yield Eqs.MediumEquation()
                break
            case Diffs.Hard:
                yield Eqs.HardEquation()
                break
            case Diffs.Impossible:
                yield Eqs.ImpossibleEquation()
                break

        }
    }

}