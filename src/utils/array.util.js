export function replaceItemAtIndex(arr, index, value) {
  return [...arr.slice(0, index), value, ...arr.slice(index + 1)];
}

export function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
