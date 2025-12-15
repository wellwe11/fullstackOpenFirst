var exerciseDays = [3, 0, 2, 4.5, 0, 3, 1];
var checkValueAboveZero = function (val) {
    if (!val || !+val)
        throw new Error("Method: checkValueAboveZero: argument is not of typeof number");
    if (val > 0)
        return val;
};
var isSuccess = function (value, target) {
    if (!value || (+!value && !target) || !+target)
        throw new Error("Method: isSuccess: requires two number arguments");
    return value >= target;
};
var calculateRating = function (value, target) {
    if (!value || (!+value && !target) || !+target)
        throw new Error("Method: calculateRating: requires two number arguments");
    var calculation = value / target;
    return 3 * calculation; // final score which is rated between 1-3
};
var calculateAverage = function (numbers) {
    if (!numbers || !Array.isArray(numbers))
        throw new Error("Method: calculateAverage: argument must be of typeof Array. Array must contain numbers");
    var length = numbers.length;
    var total = numbers.reduce(function (a, b) { return a + b; });
    return total / length;
};
var describeScore = function (rating) {
    if (!rating || !+rating)
        throw new Error("Method: describeScore: must have a typeof argument of number");
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
    if (!numbers || numbers.length < 1 || !Array.isArray(numbers))
        return new Error("Array is either not correctly entered, or is not valid");
    var periodLength = numbers.length; // days of period
    var trainingDaysLength = numbers.filter(checkValueAboveZero).length; // days that actually trained
    var averageTime = calculateAverage(numbers); // average value throughout the period
    var rating = calculateRating(target, averageTime); // rating of 1-3
    var success = isSuccess(rating, target); // if target >= averageTime
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
