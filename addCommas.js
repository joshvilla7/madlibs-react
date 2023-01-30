function addCommas(num) {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = addCommas;
