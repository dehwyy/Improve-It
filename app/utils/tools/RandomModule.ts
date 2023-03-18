export default class RandomModule {
  static getRandomInRange<Nullable = number>(first: number, second: number, k = 1): number | Nullable {
    // k is greater than 1
    // Random number in range; k is coefficient for selected range=
    if (k < 1) return null as Nullable
    const max = Math.max
    const min = Math.min
    return k * Math.floor(Math.random() * (max(first, second) - min(first, second)) + min(first, second))
  }

  private static getRandomRoundInRange(minNumber: number, maxNumber: number, k = 1): number {
    return k * Math.round(Math.random() * (maxNumber - minNumber) + minNumber)
    // Has no test due to private, and it's just copy of the method above but instead using 'Math.floor', it uses 'Math.round'
  }

  static getRandomFromArray<T, Nullable = T>(arr: T[]): T | Nullable {
    // Should set NULL as second Generic when "arr" is possibly empty
    if (!arr.length) return null as Nullable
    // I'm using here round in case that probability of last element (where k is coefficient and l is length)
    //     is like 1 / (l * k * 9 ** 17 ); with k = 1 and l = 2 it equals ~0,00000000000000003 bruh
    return arr[this.getRandomRoundInRange(0, arr.length - 1)]
  }
}
