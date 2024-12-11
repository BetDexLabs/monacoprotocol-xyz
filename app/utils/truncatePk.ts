export function truncatePkString(stringToTruncate: string): string {
  const stringLength = stringToTruncate.length;
  return `${stringToTruncate.substring(0, 5)}...${stringToTruncate.substring(
    stringLength - 5,
    // eslint-disable-next-line prettier/prettier
    stringLength
  )}`;
}
