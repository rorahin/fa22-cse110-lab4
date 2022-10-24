// Question #
// change the variable type (var, let, const) see the difference
function discountPrices(prices, discount) {
    const discounted = [];
    // const finalPrice = 0;
    const length = prices.length;

    // change the variable type (var, let, const) see the difference
    for (let i = 0; i < length; i++){
        const discountedPrice = prices[i] * (1 - discount);
        // finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(discountPrices);
    }

    //console.log("Hello: ",i)
    // console.log(discountedPrice);
    // console.log(finalPrice);
    // console.log(length)

    console.log(discounted);
    return discounted;

}

discountPrices([100, 200, 300], 0.5)