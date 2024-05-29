export default function appendToEachArrayValue(array, appendString) {
  for (const idx in array) {
    const value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}

export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line
	for (const value of array) {
    // eslint-disable-next-line
		array[array.indexOf(value)] = appendString + value;
  }

  return array;
}