let test = ["abc","sfds","adwqd"]

function testFunction(nameArray){
    let obj = {}

    for(let name of nameArray){
        obj[name] = (obj[name] || 0) + 1;
    }

    return obj
}

console.log(testFunction(test))

