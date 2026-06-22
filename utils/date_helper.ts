export const isBorderLeftDate = (keyIndex: number) => {
  if (keyIndex === 0 || keyIndex % 7 === 0) {
    return true;
  }
  return false;
};
