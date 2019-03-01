function totalCost(){
    var phonePrice = 899.95;
    var customRate = 0.05;
    var taxRate = 0.18;
    var totalPrice = 0;
    totalPrice = (phonePrice + phonePrice * taxRate + phonePrice * customRate) * 30;
    document.write("Total price after taxes is " + totalPrice);
}

totalCost();
