export default value => {
  if (!value) {
    return value;
  }
  return value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ");
};
