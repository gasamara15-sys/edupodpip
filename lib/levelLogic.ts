export function qualityFrom(correct: boolean, ms: number) {
  if (!correct) return 2;
  if (ms < 3000) return 5;
  if (ms < 6000) return 4;
  return 3;
}
export function nextInterval(prevInterval: number, repetition: number, ef: number, q: number) {
  if (q < 3) return { repetition: 0, ef: Math.max(1.3, ef - 0.2), interval: 1 };
  const newEf = Math.max(1.3, ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
  if (repetition === 0) return { repetition: 1, ef: newEf, interval: 1 };
  if (repetition === 1) return { repetition: 2, ef: newEf, interval: 3 };
  return { repetition: repetition + 1, ef: newEf, interval: Math.round(prevInterval * newEf) };
}

