var drink = {
    color: 'orange',
    taste: 'orange',
    carbonated: true,
    brand: 'sunkisser'
}

//Loop over drink
//if the value is 'orange' change it to 'cherry'

for(var key in drink){
    key
    let value = drink[key];
    value
    if(drink[key] ==='orange'){
        drink[key]='cherry'
    }
}

//Write a function, called 'checkValid', that takes in an object like drink 
//loop over the object and check if values are falsy
//return false if any values are falsy
//return true if all values are truthy

function checkValid(obj){
    for(var key in obj){
        if(!obj[key]){
            return false
        }
    }return true;
}