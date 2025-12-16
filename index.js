"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import calculateBmi from "./calculateBmi";
var calculator_1 = __importDefault(require("./calculator"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/calculate", function (req, res) {
    var _a = req.body, valueOne = _a.valueOne, valueTwo = _a.valueTwo, op = _a.op;
    var result = (0, calculator_1.default)(valueOne, valueTwo, op);
    res.send({ result: result });
});
var PORT = 3003;
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
// app.get("/bmi", (req, res) => {
//   const heightStr: string = req.query.height as string;
//   const weightStr: string = req.query.weight as string;
//   const height = Number(heightStr);
//   const weight = Number(weightStr);
//   if (!heightStr || weightStr || isNaN(height) || isNaN(weight)) {
//     return res.status(400).json({
//       error: "malformatted parameters",
//     });
//   }
//   const bmiResult = calculateBmi(height, weight);
//   res.json({
//     weight: weight,
//     height: height,
//     bmi: bmiResult,
//   });
// });
