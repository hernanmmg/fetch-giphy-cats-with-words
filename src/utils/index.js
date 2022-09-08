export const findWordsFromLargeStr = (words = "", limit = 3) => {
  const formattedWords = words.split(" ", limit).join(" ");
  return formattedWords;
};
