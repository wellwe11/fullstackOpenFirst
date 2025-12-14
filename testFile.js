"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator = (a, b, op) => {
    switch (op) {
        case "multiply":
            return a * b;
        case "add":
            return a + b;
        case "divide":
            if (b === 0)
                throw new Error("can't divide by 0!");
            return a / b;
        default:
            throw new Error("Operation is not multiply, add or divide!");
    }
};
try {
    console.log(calculator(1, 2, "divide"));
}
catch (error) {
    let errorMessage = "something went wrong: ";
    if (error instanceof Error) {
        errorMessage += error.message;
    }
    console.log(errorMessage);
}
//# sourceMappingURL=testFile.js.map