function sumItems(array) {
  // Sum all the numbers in the array
  let result = 0;
  for (const el of array) {
    if (Array.isArray(el) === true) {
      result += sumItems(el);
    } else {
      result += el;
    }
  }
  return result;
}

module.exports = sumItems;