import { QuickSort } from '../src/strategies/quick.sort';

const bubble = new QuickSort();
const testData = [1,2, 5, 4, -1, -2, 3];
// const correctResult = [3, 4, 7, 8, 9];
console.log(`result = ${bubble.sort(testData)}`);