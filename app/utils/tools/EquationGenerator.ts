import RandomSimple from "@/app/utils/tools/RandomSimple";

type EquationT = [string, number]

enum Signs {
    plus = "+",
    minus = "-"
}
class EquationGenerator {
    private rand(...args: Parameters<typeof RandomSimple.getRandomInRange>): ReturnType<typeof RandomSimple.getRandomInRange> {
        return RandomSimple.getRandomInRange(...args)
    }

    private getRandomSign(): Signs {
       return RandomSimple.getRandomFromArray<Signs>([Signs.plus, Signs.minus])
    }

    private signMaker<T = number, R = T>(minusCb: () => T, plusCb: () => R): {sign: string, res: T | R} {
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


    EasyEquation(): EquationT {
        const rFirst = this.rand(20, 1000)
        const rSecond = this.rand(20, 1000)
        const {sign, res} = this.signMaker(
            () => rFirst - rSecond,
            () => rFirst + rSecond
        )
        return [`${rFirst} ${sign} ${rSecond} = `, res]
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
}

const Eqs = new EquationGenerator()

// well it works well, nice job!

export default function* getEquations(diff: Diffs = 0, count = 1): Generator<EquationT, void> {
    let localCount = 0
    while (localCount < count) {
        localCount++
        switch (diff) {
            case Diffs.Easy:
                yield Eqs.EasyEquation()
                break
            case Diffs.Medium:
                yield Eqs.MediumEquation()
                break

        }
    }

}