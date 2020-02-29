import { Sorter } from '../intefaces/sorter';

export class QuickSort implements Sorter {
    private tempData: Array<any> = [];
    private pivot: any;
    private pivotIndex: number = 0;

    swapValue(index1: any, index2: any) {
        console.log(`swapping ${this.tempData[index1]} >< ${this.tempData[index2]}`);
        let tmp = this.tempData[index1];
        this.tempData[index1] = this.tempData[index2];
        this.tempData[index2] = tmp;
        console.log('------');
    }

    subSort() {
        console.log(`pivot ${this.pivot}`);
        console.log(`pivotIndex ${this.pivotIndex}`);
        for (let i = 0; i < this.pivotIndex + 1; i++) {
            if (this.tempData[i] > this.tempData[this.pivotIndex]) {
                // move pivot to the left
                console.log('move pivot to the left');
                this.swapValue(this.pivotIndex, (this.pivotIndex - 1));
                this.pivot = this.tempData[this.pivotIndex - 1];
                this.pivotIndex = this.pivotIndex - 1;
                console.log(`pivot ${this.pivot}`);
                console.log(`this.pivotIndex ${this.pivotIndex}`);

                // swap the bigger value and the right pivot
                console.log(`swap the bigger value and the right pivot => ${this.pivotIndex + 1}`)
                this.swapValue(i, this.pivotIndex + 1);

                console.log('********');
                console.log(`temp = ${this.tempData}`);
                console.log('********');

                if ((this.tempData[this.pivotIndex - 1] < this.tempData[this.pivotIndex]) && (this.tempData[this.pivotIndex + 1] > this.tempData[this.pivotIndex])) {
                    let clear = false;
                    for (let x = 0; x < this.pivotIndex; x++) {
                        if (this.tempData[x] < this.tempData[this.pivotIndex]) {
                            clear = true;
                        } else {
                            clear = false;
                            break;
                        }
                    }
                    if (clear) {
                        break;
                    }
                }
            }
        }
    }

    sort(data: Array<any>): Array<any> {
        console.log(`init ${data}`);
        this.tempData = data;

        this.pivot = data[data.length - 1];
        this.pivotIndex = data.length - 1;

        this.subSort();

        let it = 1;
        while (this.pivotIndex > 0) {
            it++;
            console.log('---GOAL----');

            this.pivotIndex = this.pivotIndex - 1;
            this.pivot = this.tempData[this.pivotIndex];

            this.subSort();
        }

        console.log(`ITERATION ${it}`);
        return this.tempData;
    }

    reverseSort(data: Array<any>): Array<any> {
        return data;
    }
}