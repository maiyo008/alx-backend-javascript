export default function hasValuesFromArray(set1, arr) {
  for (const value of arr) {
    if (!set1.has(value)) {
      return false;
    }
  }
  return true;
}
