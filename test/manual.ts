import { BubbleSort } from '../src/strategies/bubble.sort';

const bubble = new BubbleSort();
const testData = [7, 3, 8, 4, 9];
const correctResult = [3, 4, 7, 8, 9];
console.log(bubble.sort(testData));