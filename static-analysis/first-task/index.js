"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateBalance = exports.roundTo = void 0;
var person = { name: 'Patrick', age: 25 };
console.log("Hi ".concat(person.name, "!"));
////////////////////////////////////////////
var a = function (input) { return 2 * input; };
var roundTo = function (input, f) {
    if (f === void 0) { f = 2; }
    var powerOfTen = Math.pow(10, f);
    return Math.round(input * powerOfTen) / powerOfTen;
};
exports.roundTo = roundTo;
console.log("The variable a was being used also insite the function roundto");
////////////////////////////////////////////
var BalanceType;
(function (BalanceType) {
    BalanceType["CREDIT"] = "CREDIT";
    BalanceType["DEBIT"] = "DEBIT";
})(BalanceType || (BalanceType = {}));
var calculateBalance = function (memorandums, initialAmount) {
    if (initialAmount === void 0) { initialAmount = 0; }
    return memorandums.reduce(function (acc, item) {
        var amount = Number(item.amount);
        var isCredit = item.balance === BalanceType.CREDIT;
        return isCredit ? acc - amount : acc + amount;
    }, initialAmount);
};
exports.calculateBalance = calculateBalance;
// Example Usage:
var memorandums = [
    { balance: BalanceType.CREDIT, amount: '100' },
    { balance: BalanceType.DEBIT, amount: '50' },
];
var result = (0, exports.calculateBalance)(memorandums);
console.log("Final Balance: ".concat(result));
