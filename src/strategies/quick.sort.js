"use strict";
exports.__esModule = true;
var QuickSort = /** @class */ (function () {
    function QuickSort() {
        this.tempData = [];
    }
    QuickSort.prototype.swapValue = function (array, index1, index2) {
        console.log("swapping " + array[index1] + " >< " + array[index2]);
        var tmp = array[index1];
        array[index1] = array[index2];
        array[index2] = tmp;
        console.log("SWAP result " + array);
        console.log('------');
    };
    QuickSort.prototype.partition = function (low, high) {
        console.log("---PARTITION START---");
        // use latest element as pivot
        var pivot = this.tempData[high];
        var i = low - 1;
        console.log("init i => " + i);
        console.log("pivot : " + pivot);
        console.log("array : " + this.tempData);
        for (var j = low; j < high; j++) {
            // if current element < pivot
            console.log("i => " + i + ", j => " + j);
            if (this.tempData[j] < pivot) {
                console.log("this.tempData[j] < pivot : " + this.tempData[j] + " < " + pivot);
                i++;
                this.swapValue(this.tempData, i, j);
            }
        }
        console.log('swap outside loop');
        this.swapValue(this.tempData, i + 1, high);
        console.log("return " + this.tempData[i + 1]);
        console.log("---PARTITION END---");
        return i + 1;
    };
    QuickSort.prototype.quicksort = function (low, high) {
        console.log("---QUICK SORT lo: " + low + ", hi: " + high);
        if (low < high) {
            var partitionIndex = this.partition(low, high);
            this.quicksort(low, partitionIndex - 1);
            this.quicksort(partitionIndex + 1, high);
        }
        console.log("---END QUICK SORT lo: " + low + ", hi: " + high);
    };
    QuickSort.prototype.sort = function (data) {
        this.tempData = data;
        this.quicksort(0, data.length - 1);
        return this.tempData;
    };
    QuickSort.prototype.reverseSort = function (data) {
        return data;
    };
    return QuickSort;
}());
exports.QuickSort = QuickSort;
