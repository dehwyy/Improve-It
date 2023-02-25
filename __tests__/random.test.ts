import {describe, expect, test} from "vitest";
import RandomSimple from "@/app/utils/tools/RandomSimple";

const randomValueCheckerTrue = (num1: number, num2: number) => {
    const randomValue = RandomSimple.getRandomInRange(num1, num2)
    expect(randomValue).toBeGreaterThanOrEqual(num1)
    expect(randomValue).toBeLessThanOrEqual(num2)
}

const randomValueCheckerFalse = (num1: number, num2: number) => {
    const randomValue = RandomSimple.getRandomInRange(num1, num2)
    expect(randomValue).not.toBeGreaterThanOrEqual(num1 + num2)
}


describe("utils test", () => {
    test("random true", () => {
        randomValueCheckerTrue(1, 7)
        randomValueCheckerTrue(100, 500)
        randomValueCheckerTrue(1, 2)
    })
    test("random false", () => {
        randomValueCheckerFalse(1, 7)
        randomValueCheckerFalse(100, 500)
        randomValueCheckerFalse(1, 2)
        randomValueCheckerFalse(100, 5)
    })
})