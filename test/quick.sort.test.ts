import { QuickSort } from '../src/strategies/quick.sort';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

describe('Quick Sort', () => {
  it('should sort simple number arrays', () => {
    const testData = [7,3,8,4,9];
    const correctResult = [3,4,7,8,9];

    const quick = new QuickSort();
    expect(quick.sort(testData)).toEqual(correctResult);
  });

  it('should reverse sort simple number arrays', () => {
    const testData = [7,3,8,4,9];
    const correctResult = [9,8,7,4,3];

    const quick = new QuickSort();
    expect(quick.reverseSort(testData)).toEqual(correctResult);
  });

  it('should pass test with 20 random number given', () => {
    const testData = [];
    for (let i=0;i < 20;i++) {
      testData.push(getRandomInt(20));
    }

    const correctResult = testData.sort(function(a, b){return a-b});
    const quick = new QuickSort();
    expect(quick.sort(testData)).toEqual(correctResult);
  });
});
