declare const calculateExercises: (numbers: number[], target?: number) => Error | {
    periodLength: number;
    trainingDaysLength: number;
    target: number;
    averageTime: number;
    rating: number;
    success: boolean;
    description: string;
};
export default calculateExercises;
