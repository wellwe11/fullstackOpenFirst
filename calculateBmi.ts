const BMIValues = {
  underweight: 16,
  normal: 18.5,
  overweight: 26,
};

interface Values {
  valueOne: number;
  valueTwo: number;
}

const parseArguments = (args: string[]): Values => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      valueOne: Number(args[2]),
      valueTwo: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

const findCategory = (bmi: number): string => {
  if (typeof bmi !== "number")
    throw new Error("argument is not of typeof number");

  const { normal, overweight } = BMIValues;

  if (bmi >= overweight) return "overweight";
  else if (bmi >= normal) return "normal";
  else return "underweight";
};

const calculateBmi = (height: number, weight: number): string => {
  const heightInMeter = height / 100;
  const square: number = heightInMeter * heightInMeter;
  const bmi: number = weight / square;

  return findCategory(bmi);
};

try {
  const { valueOne, valueTwo } = parseArguments(process.argv);
  console.log(calculateBmi(valueOne, valueTwo));
} catch (error: unknown) {
  let errorMessage = "Error ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }

  console.log(errorMessage);
}
