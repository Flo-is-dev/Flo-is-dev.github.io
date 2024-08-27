export const mockUser = {
  id: 18,
  userInfos: {
    firstName: "John",
    lastName: "Doe",
    age: 55,
  },
  score: 0.66,
  keyData: {
    calorieCount: 3333,
    proteinCount: 22,
    carbohydrateCount: 111,
    lipidCount: 444,
  },
};

export const mockDailyActivity = [
  { day: "1", poids: 70, calories: 240 },
  { day: "2", poids: 69, calories: 220 },
  { day: "3", poids: 68, calories: 356 },
  { day: "4", poids: 70, calories: 300 },
  { day: "5", poids: 69, calories: 220 },
  { day: "6", poids: 70, calories: 200 },
  { day: "7", poids: 69, calories: 290 },
  { day: "8", poids: 70, calories: 350 },
  { day: "9", poids: 69, calories: 220 },
  { day: "10", poids: 70, calories: 320 },
];

export const mockAverageDuration = [
  { day: "L", sessionDuration: 30 },
  { day: "M", sessionDuration: 45 },
  { day: "M", sessionDuration: 50 },
  { day: "J", sessionDuration: 68 },
  { day: "V", sessionDuration: 60 },
  { day: "S", sessionDuration: 75 },
  { day: "D", sessionDuration: 90 },
];

export const mockUserPerformance = [
  { subject: "Intensité", A: 120, fullMark: 150 },
  { subject: "Vitesse", A: 98, fullMark: 150 },
  { subject: "Force", A: 86, fullMark: 150 },
  { subject: "Endurance", A: 99, fullMark: 150 },
  { subject: "Energie", A: 85, fullMark: 150 },
  { subject: "Cardio", A: 65, fullMark: 150 },
];

export const mockActivityOverview = {
  calorieCount: 1930,
  carbohydrateCount: 290,
  lipidCount: 50,
  proteinCount: 155,
};
