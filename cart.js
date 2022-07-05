///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza',
        price: 9.99
    },
    {
        name: 'pasta',
        price: 8.99
    },
    {
        name: 'salad',
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(getSum)

function getSum(total, obj) {

    return total + obj.price;
}
console.log(summedPrice)
//////////////////PROBLEM 2////////////////////
/*
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments.

    Inside the function, calculate the tax
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number.

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let finale = (cartTotal * (1 - tax) - couponValue)
    return finale
}

console.log(calcFinalPrice(100, 10, .25))
//////////////////PROBLEM 3////////////////////
/*
    In this problem, you'll create a model for
    a customer object as well as an example
    object.

    Plan out a customer object for the cart page.
    Think about the information that a
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types.

    Your object should have at least 4 properties.
*/

/*
    TEXT ANSWER HERE
-shipping adress: String. This property is important because that way a website can determine how much taxes to apply according to the state and works best as a string to include street names.
-credit card #: String. This property works best as a string to be able to easily check what type of card is being typed in by the specific pattern of numbers.
- age : number. This property will help define if extra verification if customer is below a certain age which is easily done with the number data type.
- Request utensils: boolean. This property will easily help let the restaurant know if a customer specifically needs utensils and will cut down waste. This data type helps to easily determine wether or not the statement is true.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    shippingAddress: `1808 Stanley Dr Nashville , MI `,
    creditCardNum: `555544447779999`,
    age: 20,
    requestUtensils: true
}