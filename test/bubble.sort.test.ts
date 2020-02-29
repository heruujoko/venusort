import { BubbleSort } from '../src/strategies/bubble.sort';

describe('Bubble Sort', () => {
  it('should sort simple number arrays', () => {
    const testData = [7,3,8,4,9];
    const correctResult = [3,4,7,8,9];

    const bubble = new BubbleSort();
    expect(bubble.sort(testData)).toEqual(correctResult);
  });

  it('should reverse sort simple number arrays', () => {
    const testData = [7,3,8,4,9];
    const correctResult = [9,8,7,4,3];

    const bubble = new BubbleSort();
    expect(bubble.reverseSort(testData)).toEqual(correctResult);
  });
});
