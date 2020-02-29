"use strict";
exports.__esModule = true;
var QuickSort = /** @class */ (function () {
    function QuickSort() {
        this.tempData = [];
        this.pivotIndex = 0;
    }
    QuickSort.prototype.swapValue = function (index1, index2) {
        console.log("swapping " + this.tempData[index1] + " >< " + this.tempData[index2]);
        var tmp = this.tempData[index1];
        this.tempData[index1] = this.tempData[index2];
        this.tempData[index2] = tmp;
        console.log('------');
    };
    QuickSort.prototype.subSort = function () {
        console.log("pivot " + this.pivot);
        console.log("pivotIndex " + this.pivotIndex);
        for (var i = 0; i < this.pivotIndex + 1; i++) {
            if (this.tempData[i] > this.tempData[this.pivotIndex]) {
                // move pivot to the left
                console.log('move pivot to the left');
                this.swapValue(this.pivotIndex, (this.pivotIndex - 1));
                this.pivot = this.tempData[this.pivotIndex - 1];
                this.pivotIndex = this.pivotIndex - 1;
                console.log("pivot " + this.pivot);
                console.log("this.pivotIndex " + this.pivotIndex);
                // swap the bigger value and the right pivot
                console.log("swap the bigger value and the right pivot => " + (this.pivotIndex + 1));
                this.swapValue(i, this.pivotIndex + 1);
                console.log('********');
                console.log("temp = " + this.tempData);
                console.log('********');
                if ((this.tempData[this.pivotIndex - 1] < this.tempData[this.pivotIndex]) && (this.tempData[this.pivotIndex + 1] > this.tempData[this.pivotIndex])) {
                    var clear = false;
                    for (var x = 0; x < this.pivotIndex; x++) {
                        if (this.tempData[x] < this.tempData[this.pivotIndex]) {
                            clear = true;
                        }
                        else {
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
    };
    QuickSort.prototype.sort = function (data) {
        console.log("init " + data);
        this.tempData = data;
        this.pivot = data[data.length - 1];
        this.pivotIndex = data.length - 1;
        this.subSort();
        var it = 1;
        while (this.pivotIndex > 0) {
            it++;
            console.log('---GOAL----');
            this.pivotIndex = this.pivotIndex - 1;
            this.pivot = this.tempData[this.pivotIndex];
            this.subSort();
        }
        console.log("ITERATION " + it);
        return this.tempData;
    };
    QuickSort.prototype.reverseSort = function (data) {
        return data;
    };
    return QuickSort;
}());
exports.QuickSort = QuickSort;
