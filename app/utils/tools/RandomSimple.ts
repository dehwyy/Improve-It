export default class RandomSimple {
    static getRandomInRange(minNumber: number, maxNumber: number, k = 1): number {
        // Random number in range
        return k * Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)
    }

    static getRandomFromArray<T, Nullable = T>(arr: T[]): T | Nullable {
        // Should use second Generic <Nullable> when "arr" is possibly empty
        if (!arr.length) return null as Nullable
        return arr[this.getRandomInRange(0, arr.length - 1)]
    }
}