"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BMIValues = {
    underweight: 16,
    normal: 18.5,
    overweight: 26,
};
var parseArguments = function (args) {
    if (args.length < 4)
        throw new Error("Not enough arguments");
    if (args.length > 4)
        throw new Error("Too many arguments");
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            valueOne: Number(args[2]),
            valueTwo: Number(args[3]),
        };
    }
    else {
        throw new Error("Provided values were not numbers!");
    }
};
var findCategory = function (bmi) {
    if (typeof bmi !== "number")
        throw new Error("argument is not of typeof number");
    var normal = BMIValues.normal, overweight = BMIValues.overweight;
    if (bmi >= overweight)
        return "overweight";
    else if (bmi >= normal)
        return "normal";
    else
        return "underweight";
};
var calculateBmi = function (height, weight) {
    var heightInMeter = height / 100;
    var square = heightInMeter * heightInMeter;
    var bmi = weight / square;
    return findCategory(bmi);
};
var runScript = function () {
    try {
        var _a = parseArguments(process.argv), valueOne = _a.valueOne, valueTwo = _a.valueTwo;
        console.log(calculateBmi(valueOne, valueTwo));
    }
    catch (error) {
        var errorMessage = "Error ";
        if (error instanceof Error) {
            errorMessage += error.message;
        }
        console.log(errorMessage);
    }
};
if (process.argv.length > 2) {
    runScript();
}
exports.default = calculateBmi;
