"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BMIValues = {
    underweight: 16,
    normal: 18.5,
    overweight: 25,
};
const findCategory = (bmi) => {
    if (typeof bmi !== "number")
        throw new Error("argument is not of typeof number");
    const { normal, overweight } = BMIValues;
    if (bmi >= overweight)
        return "overweight";
    else if (bmi >= normal)
        return "normal";
    else
        return "underweight";
};
const calculateBmi = (height, weight) => {
    const heightInMeter = height / 100;
    const square = heightInMeter * heightInMeter;
    const bmi = weight / square;
    return findCategory(bmi);
};
try {
    console.log(calculateBmi(180, 74));
}
catch (error) {
    let errorMessage = "Error ";
    if (error instanceof Error) {
        errorMessage += error.message;
    }
    console.log(errorMessage);
}
//# sourceMappingURL=calculateBmi.js.map