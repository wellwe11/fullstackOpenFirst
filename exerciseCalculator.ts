interface UserInput {
  valueOne: number[];
}

// $ npm run calculateExercises 2 1 0 2 4.5 0 3 1 0 4
const parseArguments = (args: string[]): UserInput => {
  if (args.length < 3) throw new Error("not enough arguments");
  const numbers = args.slice(2).map((a) => +a);

  if (Array.isArray(numbers)) {
    console.log(numbers);
    return {
      valueOne: numbers,
    };
  } else {
    throw new Error("Provided value was not array!");
  }
};

const checkValueAboveZero = (val: number): boolean => {
  return val > 0;
};

const isSuccess = (value: number, target: number): boolean => {
  return value >= target;
};

const calculateRating = (value: number, target: number): number => {
  if (target === 0) throw new Error("Target cannot be of number 0");

  const ratio: number = value / target;
  const cappedRatio: number = Math.min(1.0, ratio); // final score which is rated between 1-3

  const score = 1 + 2 * cappedRatio;

  return Math.floor(score * 10) / 10;
};

const calculateAverage = (numbers: number[]): number => {
  if (numbers.length === 0) return 0;

  const length = numbers.length;
  const total = numbers.reduce((a, b) => a + b, 0);

  return Math.floor((total / length) * 10) / 10;
};

const describeScore = (rating: number): string => {
  const score =
    rating === 3
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

const calculateExercises = (numbers: number[], target: number = 2) => {
  if (!Array.isArray(numbers) || numbers.length < 1)
    return new Error("Array is either not correctly entered, or is not valid");

  console.log(numbers);
  const periodLength: number = numbers.length - 1; // days of period
  const trainingDaysLength: number =
    numbers.filter(checkValueAboveZero).length - 1; // days that actually trained

  const averageTime: number = calculateAverage(numbers); // average value throughout the period

  const rating: number = calculateRating(averageTime, target); // rating of 1-3

  const success: boolean = isSuccess(averageTime, target); // if target >= averageTime

  const description: string = describeScore(rating);

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
  const { valueOne } = parseArguments(process.argv);

  console.log(calculateExercises(valueOne));
} catch (error: unknown) {
  let errorMsg = "Error ";
  if (error instanceof Error) {
    errorMsg += error.message;
  }

  console.log(errorMsg);
}

export default calculateExercises;
