var mapCustomer = function(customer) {
    var input = customer
    function emptyobject (input){//fonction empty ne marche pas
        if (input === null){
            return true;
        }
        if (input.length === 0){
            return true;
        }
        return true;
    }
    if (emptyobject(input) === true) {
        input = {
      firstname: 'John',
      lastname: 'Doe',
      products: [],
      moneySpent: 0
    }
}
    return input;
}

module.exports = {
  title: 'Exercise 2',
  run: mapCustomer
}
