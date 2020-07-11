const o = {
    name : 'gomjae',
    getName(){
        alert(name)
    }
}

function Person(name){
    this.name = name
}

const tempObj = new Person('ggomjae')

function sayInfo(){
   console.log(o)
   console.log(o.__proto__)
   console.log(o.__proto__.__proto__)
   console.log(tempObj)
}


