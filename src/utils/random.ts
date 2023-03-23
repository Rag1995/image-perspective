export const useRandom = (min: number, max: number) => {
  return Math.round(min + Math.random() * (max - min))
}
