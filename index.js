"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var calculateBmi_1 = __importDefault(require("./calculateBmi"));
var app = (0, express_1.default)();
app.get("/bmi", function (req, res) {
    var heightStr = req.query.height;
    var weightStr = req.query.weight;
    var height = Number(heightStr);
    var weight = Number(weightStr);
    var bmiResult = (0, calculateBmi_1.default)(height, weight);
    res.json({
        weight: weight,
        height: height,
        bmi: bmiResult,
    });
});
var PORT = 3003;
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
