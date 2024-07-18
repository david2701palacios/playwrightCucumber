export function generateRandomInteger(max: number): number {
    if (max <= 0 || max > Number.MAX_SAFE_INTEGER) {
        throw new Error('Max must be greater than 0 and less than or equal to Number.MAX_SAFE_INTEGER');
    }
    const array = new Uint32Array(1);
    let randomInt = 0;

    do {
        crypto.getRandomValues(array);
        randomInt = array[0];
    } while (randomInt > Math.floor((2 ** 32 - 1) / max) * max);

    return randomInt % max;
}