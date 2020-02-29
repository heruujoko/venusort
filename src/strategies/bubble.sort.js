"use strict";
exports.__esModule = true;
var BubbleSort = /** @class */ (function () {
    function BubbleSort() {
    }
    BubbleSort.prototype.sort = function (data) {
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j - i - 1; j++) {
                if (data[j + 1] < data[j]) {
                    var tmp = data[j + 1];
                    data[j + 1] = data[j];
                    data[j] = tmp;
                }
            }
        }
        return data;
    };
    BubbleSort.prototype.reverseSort = function (data) {
        return this.sort(data).reverse();
    };
    return BubbleSort;
}());
exports.BubbleSort = BubbleSort;
