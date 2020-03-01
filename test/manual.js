"use strict";
exports.__esModule = true;
var quick_sort_1 = require("../src/strategies/quick.sort");
var bubble = new quick_sort_1.QuickSort();
// const testData = [1,2, 5, 4, -1, -2, 3];
var testData = [7, 3, 8, 4, 9];
// const correctResult = [3, 4, 7, 8, 9];
console.log("result = " + bubble.sort(testData));
