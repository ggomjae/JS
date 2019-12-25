
async function func(){
    return 1;
}

console.log(func() instanceof Promise); // true

func().then((result)=>{
    console.log(result);
})


async function test(){
    await asyncFunc(1,3);
    await asyncFunc(2,1);
    await asyncFunc(3,5);
}

function asyncFunc(num,sec){
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            console.log(num);
            resolve('success');
        },sec*1000);
    })
}

test();