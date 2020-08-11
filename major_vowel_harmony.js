const isHasMajorVowelHarmony = (word) => {
  const hardVowels = ["a", "ı", "o", "u"];
  const softVowels = ["e", "i", "ö", "ü"];

  let hardCounter = 0;
  let softCounter = 0;

  [...word].forEach((char) => {
    if ([...hardVowels, ...softVowels].includes(char) === false) return false; // letter is not vowel, just skip this one.
    if (hardVowels.includes(char)) return hardCounter++;
    if (softVowels.includes(char)) return softCounter++;
  });

  return !(hardCounter > 0 && softCounter > 0);
};

export default isHasMajorVowelHarmony;
