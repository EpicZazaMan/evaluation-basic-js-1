var removeNegativeValue = function (values) {
    var input = values || [];
    function positifs(element) {
    return element >= 0;
    }
    var filtre = input.filter(positifs);
    return filtre;
}

module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}
