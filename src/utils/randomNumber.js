// @flow

export const getRandomNumber = (min: number, max: number, fractionDigit: number = 1): number => {
  return Number((Math.random() * (max - min) + min).toFixed(fractionDigit));
};
