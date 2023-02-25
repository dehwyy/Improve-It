import RandomSimple from "@/app/utils/tools/RandomSimple";

type EquationT = [string, number]


enum Diffs {
    Easy,
    Medium,
    Hard,
    Impossible
}

enum Signs {
    plus = "+",
    minus = "-"
}
class EquationGenerator {
    private getRandomSign(): Signs {
       return RandomSimple.getRandomFromArray<Signs>([Signs.plus, Signs.minus])
    }
    MediumEquation(): EquationT {
        const rand = RandomSimple.getRandomInRange
        const x = rand(1, 10)
        const randomK = rand(3, 10)
        const randomConstant = rand(1, 100, randomK)
        const sign = this.getRandomSign()
        let equalsNumber: number
        if (sign === Signs.minus) {
            equalsNumber = x * randomK - randomConstant
        } else {
            equalsNumber = x * randomK + randomConstant
        }
        return [`${randomK}x ${sign} ${randomConstant} = ${equalsNumber} `, x]
    }
}

const Eqs = new EquationGenerator()

// well it works well, nice job!

export default function* getEquations(diff = 0, count = 1): Generator<unknown, void, EquationT> {
    let localCount = 0
    while (localCount < count) {
        yield Eqs.MediumEquation()
        localCount++
    }
}