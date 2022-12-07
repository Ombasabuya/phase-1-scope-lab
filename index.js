// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'John';
var bestCustomer;
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    bestCustomer = 'not bob'
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'

    return bestCustomer;
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Sam'
    return leastFavoriteCustomer;
}