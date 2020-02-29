export interface Sorter {
    sort(data: Array<any>): Array<any>;
    reverseSort(data: Array<any>): Array<any>;
}