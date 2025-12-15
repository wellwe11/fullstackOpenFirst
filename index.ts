import express from "express";
import calculateBmi from "./calculateBmi";

const app = express();

app.get("/bmi", (req, res) => {
  const heightStr: string = req.query.height as string;
  const weightStr: string = req.query.weight as string;

  const height = Number(heightStr);
  const weight = Number(weightStr);

  if (!heightStr || weightStr || isNaN(height) || isNaN(weight)) {
    return res.status(400).json({
      error: "malformatted parameters",
    });
  }

  const bmiResult = calculateBmi(height, weight);

  res.json({
    weight: weight,
    height: height,
    bmi: bmiResult,
  });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
