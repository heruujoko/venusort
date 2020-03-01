import { Sorter } from '../intefaces/sorter';

export class QuickSort implements Sorter {
    private tempData: Array<any> = [];

    swapValue(array: Array<any>, index1: number, index2: number) {
        console.log(`swapping ${array[index1]} >< ${array[index2]}`);
        let tmp = array[index1];
        array[index1] = array[index2];
        array[index2] = tmp;
        console.log(`SWAP result ${array}`);
        console.log('------');
    }

    partition(low: number, high: number): number {
        console.log(`---PARTITION START---`);
        // use latest element as pivot
        let pivot = this.tempData[high];
        let i = low-1;
        console.log(`init i => ${i}`);
        console.log(`pivot : ${pivot}`);
        console.log(`array : ${this.tempData}`);

        for(let j=low;j<high;j++) {
            // if current element < pivot
            console.log(`i => ${i}, j => ${j}`);
            if(this.tempData[j] < pivot) {
                console.log(`this.tempData[j] < pivot : ${this.tempData[j]} < ${pivot}`);
                i++;
                this.swapValue(this.tempData, i, j);
            }
        }

        console.log('swap outside loop');
        this.swapValue(this.tempData, i+1, high);
        console.log(`return ${this.tempData[i+1]}`);
        console.log(`---PARTITION END---`);
        return i+1;
    }

    quicksort(low: number, high: number): void {
        console.log(`---QUICK SORT lo: ${low}, hi: ${high}`);
        if (low < high) {
            let partitionIndex: number = this.partition(low, high);
            this.quicksort(low, partitionIndex-1);
            this.quicksort(partitionIndex+1, high);
        }
        console.log(`---END QUICK SORT lo: ${low}, hi: ${high}`);
    }

    sort(data: Array<any>): Array<any> {
        this.tempData = data;
        this.quicksort(0, data.length -1);
        return this.tempData;
    }

    reverseSort(data: Array<any>): Array<any> {
        return this.sort(data).reverse();
    }
}