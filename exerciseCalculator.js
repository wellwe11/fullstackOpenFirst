"use strict";
var exerciseDays = [3, 0, 2, 4.5, 0, 3, 1];
// $ npm run calculateExercises 2 1 0 2 4.5 0 3 1 0 4
var parseArguments = function (args) {
    if (args.length < 3)
        throw new Error("not enough arguments");
    var numbers = args.slice(2).map(function (a) { return +a; });
    if (Array.isArray(numbers)) {
        console.log(numbers);
        return {
            valueOne: numbers,
        };
    }
    else {
        throw new Error("Provided value was not array!");
    }
};
var checkValueAboveZero = function (val) {
    return val > 0;
};
var isSuccess = function (value, target) {
    return value >= target;
};
var calculateRating = function (value, target) {
    if (target === 0)
        throw new Error("Target cannot be of number 0");
    var ratio = value / target;
    var cappedRatio = Math.min(1.0, ratio); // final score which is rated between 1-3
    var score = 1 + 2 * cappedRatio;
    return Math.floor(score * 10) / 10;
};
var calculateAverage = function (numbers) {
    if (numbers.length === 0)
        return 0;
    var length = numbers.length;
    var total = numbers.reduce(function (a, b) { return a + b; }, 0);
    return Math.floor((total / length) * 10) / 10;
};
var describeScore = function (rating) {
    var score = rating === 3
        ? "reached"
        : rating > 2
            ? "high"
            : rating > 1
                ? "medium"
                : "low";
    switch (score) {
        case "reached":
            return "Success";
        case "high":
            return "Not reached, but did ok";
        case "medium":
            return "Halfway there";
        case "low":
            return "Failed";
        default:
            throw new Error("Please input proper description argument");
    }
};
var calculateExercises = function (numbers, target) {
    if (target === void 0) { target = 2; }
    if (!Array.isArray(numbers) || numbers.length < 1)
        return new Error("Array is either not correctly entered, or is not valid");
    console.log(numbers);
    var periodLength = numbers.length - 1; // days of period
    var trainingDaysLength = numbers.filter(checkValueAboveZero).length - 1; // days that actually trained
    var averageTime = calculateAverage(numbers); // average value throughout the period
    var rating = calculateRating(averageTime, target); // rating of 1-3
    var success = isSuccess(averageTime, target); // if target >= averageTime
    var description = describeScore(rating);
    return {
        periodLength: periodLength,
        trainingDaysLength: trainingDaysLength,
        target: target,
        averageTime: averageTime,
        rating: rating,
        success: success,
        description: description,
    };
};
try {
    var valueOne = parseArguments(process.argv).valueOne;
    console.log(calculateExercises(valueOne));
}
catch (error) {
    var errorMsg = "Error ";
    if (error instanceof Error) {
        errorMsg += error.message;
    }
    console.log(errorMsg);
}
