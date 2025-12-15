declare const exerciseDays: number[];
interface UserInput {
    valueOne: number[];
}
declare const parseArguments: (args: string[]) => UserInput;
declare const checkValueAboveZero: (val: number) => boolean;
declare const isSuccess: (value: number, target: number) => boolean;
declare const calculateRating: (value: number, target: number) => number;
declare const calculateAverage: (numbers: number[]) => number;
declare const describeScore: (rating: number) => string;
declare const calculateExercises: (numbers: number[], target?: number) => Error | {
    periodLength: number;
    trainingDaysLength: number;
    target: number;
    averageTime: number;
    rating: number;
    success: boolean;
    description: string;
};
