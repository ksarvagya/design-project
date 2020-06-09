export default number => {
  if (!number) {
    return "";
  }
  return Math.floor(number * 100).toString() + "%";
};
