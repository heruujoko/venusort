import { Sorter } from '../intefaces/sorter';

export class BubbleSort implements Sorter {
    public sort(data: Array<any>): Array<any> {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j - i -1; j++) {
                if (data[j+1] < data[j]) {
                    let tmp = data[j+1];
                    data[j+1] = data[j];
                    data[j] = tmp;  
                }
            }
        }

        return data;
    }

    public reverseSort(data: Array<any>): Array<any> {
        return this.sort(data).reverse();
    }
}