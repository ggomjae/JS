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
const temp2Obj = new Person('ggomjae2')

function sayInfo(){
   console.log(o)
   console.log(o.__proto__)
   console.log(o.__proto__.__proto__)
   console.log(tempObj)
   console.log('---------------------\n')
   console.log(tempObj.__proto__ === temp2Obj.__proto__)
   console.log(temp2Obj.name = 'ggomjae3')
   console.log(temp2Obj.name + " " + tempObj.name)
}


