"use strict";
exports.__esModule = true;
var BubbleSortByStep = /** @class */ (function () {
    function BubbleSortByStep() {
    }
    BubbleSortByStep.bubbleSortByStep = function (list) {
        var needNextPass = true;
        for (var k = 0; k < list.length && needNextPass; k++) {
            needNextPass = false;
            for (var i = 0; i < list.length - k; i++) {
                if (list[i] > list[i + 1]) {
                    console.log("Swap" + list[i] + "with" + list[i + 1]);
                    var temp = list[i];
                    list[i] = list[i + 1];
                    list[i + 1] = temp;
                    needNextPass = true;
                }
            }
            if (needNextPass == false) {
                console.log("Array maybe sorted and the next pass is not needed");
                break;
            }
            console.log("List after the " + k + " sort: ");
            for (var j = 0; j < list.length; j++) {
                console.log(list[j] + "\t");
            }
            console.log();
        }
    };
    BubbleSortByStep.number = [8, 3, 6, 1, 4, 10, 2, 50];
    return BubbleSortByStep;
}());
console.log("\nBegin sort processing...");
BubbleSortByStep.bubbleSortByStep(BubbleSortByStep.number);
