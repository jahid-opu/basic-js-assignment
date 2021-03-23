// kilometerToMeter
function kilometerToMeter(kilometer) {
    if (kilometer <= 0) {
        return 'Please enter a valid kilometer';
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }
}

var meterResult = kilometerToMeter(10);
console.log(meterResult);


// budgetCalculator
function budgetCalculator(watch, phone, laptop) {

    if (watch < 0 || phone < 0 || laptop < 0) {
        return "please enter a valid value for budget";
    }
    else {
        var totalPrice = (watch * 50) + (phone * 100) + (laptop * 500);
        return totalPrice;
    }
}

var budgetResult = budgetCalculator(2, 1, 5);
console.log(budgetResult);



//hotelCost
function hotelCost(days) {
    if (days < 0) {
        return "please enter a valid value";
    }
    else {
        if (days <= 10) {
            var price = days * 100;
            return price;
        }
        else if (days <= 20) {
            var firstPackage = 10 * 100;
            var secondPackage = (days - 10) * 80;
            var price = firstPackage + secondPackage;
            return price;
        }
        else {
            var firstPackage = 10 * 100;
            var secondPackage = 10 * 80;
            var thirdPackage = (days - 20) * 50;
            var price = firstPackage + secondPackage + thirdPackage;
            return price;
        }
    }
}


var bookingPrice = hotelCost(30);
console.log(bookingPrice);



//megaFriend
function megaFriend(friends) {
    var max = 0;
    var largeName;
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > max) {
            max = friends[i].length;
            largeName = friends[i];
        }

    }
    return largeName;
}

var friends = ["kamal", "sakkur", "Dalton", "nuruddin", "rashedul karim"];
var nameResult = megaFriend(friends);
console.log(nameResult);
