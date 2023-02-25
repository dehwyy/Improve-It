import {describe, expect, test} from "vitest";
import getEquations from "@/app/utils/tools/EquationGenerator";


describe("utils test", () => {
    test("random true", () => {
        const a = getEquations(0, 10)
        console.log(a.next().value)
    })
})