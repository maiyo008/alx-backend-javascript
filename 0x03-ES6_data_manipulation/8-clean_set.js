export default function cleanSet(setValues, startString) {
  if (startString === '') {
    return '';
  }
  const filteredValues = Array.from(setValues)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));
  return filteredValues.join('-');
}
