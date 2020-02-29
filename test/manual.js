"use strict";
exports.__esModule = true;
var bubble_sort_1 = require("../src/strategies/bubble.sort");
var bubble = new bubble_sort_1.BubbleSort();
var testData = [7, 3, 8, 4, 9];
var correctResult = [3, 4, 7, 8, 9];
console.log(bubble.sort(testData));
