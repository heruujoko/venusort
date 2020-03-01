import { Sorter } from 'intefaces/sorter';
import { BubbleSort } from './strategies/bubble.sort';
import { QuickSort } from './strategies/quick.sort';
import { SortMethods } from './methods.enum';

export class Venusort {
    private sorter: Sorter;

    constructor(sortMethod?: string) {
        switch (sortMethod) {
            case SortMethods.BUBBLE:
                this.sorter = new BubbleSort();
                break;
            case SortMethods.QUICK:
                this.sorter = new QuickSort();
                break;
            default:
                this.sorter = new BubbleSort();
        }
    }

    sort(data: Array<any>) {
        return this.sorter.sort(data);
    }

    reverseSort(data: Array<any>) {
        return this.sorter.reverseSort(data);
    }
}