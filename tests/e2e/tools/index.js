export const randomNumberGenerate = (max) => Math.floor(Math.random() * max);

export const diferentRandomNumber = (oldNumber, max) => {
  const newRand = Math.floor(Math.random() * max);
  return newRand === oldNumber ? diferentRandomNumber(newRand, max) : newRand;
};
