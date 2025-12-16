import express from "express";
import calculateBmi from "./calculateBmi";
// import calculator, { Operation } from "./calculator";

const app = express();

// app.use(express.json());

// app.post("/calculate", (req, res) => {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const { value1, value2, op } = req.body;

//   if (!value1 || !value2 || isNaN(Number(value1)) || isNaN(Number(value2))) {
//     return res.status(400).send({ error: "..." });
//   }

//   const operation = op as Operation;

//   const result = calculator(Number(value1), Number(value2), operation);
//   res.send({ result });
// });

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
