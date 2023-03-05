import {describe, expect, expectTypeOf, test, it} from "vitest";
import getEquations from "@/app/utils/tools/EquationGenerator";
import {Modes} from "@/types/export";

const equationTrueValidator = (next: IteratorResult<[string, number], void>) => {
    if (!next.done) {
        const [equation1, variable1] = next.value
        expectTypeOf(equation1).toMatchTypeOf<string>()
        expectTypeOf(variable1).toMatchTypeOf<number>()
        expect(next.done).toBe(false)
    } else {
        expect("next.value is undefined").toBe(" while next.done is true")
    }
}

const equationFalseValidator = (next: IteratorResult<[string, number], void>) => {
    expect(next.value).toBeUndefined()
    expect(next.done).toBe(true)
}


describe("utils test", () => {
    test("speed", () => {
        it('easy equation ', () => {
            const e = getEquations(Modes.speed, 0, 2)
            const nextE1 = e.next()
            equationTrueValidator(nextE1)
            const nextE2 = e.next()
            equationTrueValidator(nextE2)

            const nextE3 = e.next()
            equationFalseValidator(nextE3)
        })
    })

    test("meduim equation", () => {
        const a = getEquations(Modes.hard, 1, 2)
        const nextM1 = a.next()
        equationTrueValidator(nextM1)
        const nextM2 = a.next()
        equationTrueValidator(nextM2)

        const nextM3 = a.next()
        equationFalseValidator(nextM3)
    })
})