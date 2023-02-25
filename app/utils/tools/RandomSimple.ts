export default class RandomSimple {
    static getRandomInRange(minNumber: number, maxNumber: number): number {
        return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)
    }
}