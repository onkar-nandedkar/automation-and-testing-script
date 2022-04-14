

// Test quantity of product
product_quantities = [1 , 0 , 23]

let quantity_checker = function(product_quantity){
    return (product_quantity > 0 && product_quantity <= 10)
}
// Test Zip Code
zip_codes = ['233456' , 'Aasjdksjd' , '42541']

let zip_code_checker = function(zip_code){
    if(zip_code.length != 6)
        return false;
    
    if(isNaN(zip_code)){
        return false;
    }
    else{
        return true;
    }
}
// Test proceed to checkout
checkout_quantity = [0 , 12, 1]

let checkout_quantity_checker = function(checkout_quantity){
    return ( checkout_quantity > 0 );
}
// Test Card Number
let card_numbers_checker = function(card_number){
    
    const indvidual_numnbers = card_number.split(" ")
    let i =0;
    for(i=0;i<indvidual_numnbers.length;i++){
        // check for valid length
        if(indvidual_numnbers[i].length != 4){
            return false;
        }
        // check if the induvidual numbers are valid or not
        if(isNaN(indvidual_numnbers[i])){
            return false;
        }

    }
    return true;
}
card_numbers = ['2133 3421 5677 1236' , '3215 1244 ABCD 1247' , 'aaaaaaaaaaaaaaa']
// Test CVV
cvv_numbers = ['12456' , 'aaaaaaa' , '456']

let cvv_checker = function(cvv){
    if(cvv.length != 3){
        return false;
    }
    
    if(isNaN(cvv)){
        return false;
    }
    else{
        return true;
    }
    return true;
}

console.log('--------------------------Testing of Details--------------------------')

console.log('--------------------------Product Quantity Checker----------------------------')

for(i=0;i<product_quantities.length;i++){
    console.log(product_quantities[i])
    console.log(quantity_checker(product_quantities[i]))
}

console.log('--------------------------Zip Code Checker----------------------------')

for(i=0;i<zip_codes.length;i++){
    console.log(zip_codes[i])
    console.log(zip_code_checker(zip_codes[i]))
}

console.log('--------------------------Proceed to Checkout Checker----------------------------')
for(i=0;i<checkout_quantity.length;i++){
    console.log(checkout_quantity[i])
    console.log(checkout_quantity_checker(checkout_quantity[i]))
}

console.log('--------------------------Card Number Checker----------------------------')
for(i=0;i<card_numbers.length;i++){
    console.log(card_numbers[i])
    console.log(card_numbers_checker(card_numbers[i]))    
}

console.log('--------------------------CVV Checker----------------------------')
for(i=0;i<cvv_numbers.length;i++){
    console.log(cvv_numbers[i])
    console.log(cvv_checker(cvv_numbers[i]))    
}
