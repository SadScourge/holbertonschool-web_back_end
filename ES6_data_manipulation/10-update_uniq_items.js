export default function updateUniqueItems(updatedMap) {
  if (updatedMap instanceof Map) {
    updatedMap.forEach((value, key) => {
      if (value === 1) {
        updatedMap.set(key, 100);
      }
    });
  } else {
    throw new Error('Cannot process');
  }
  return updatedMap;
}
