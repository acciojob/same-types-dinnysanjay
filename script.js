function isSameType(value1, value2) {
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  } else if (isNaN(value1) || isNaN(value2)) {
    return false;
  }
  return typeof value1 === typeof value2;
}