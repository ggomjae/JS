
function func(callback,sec){
    setTimeout(()=>{
        callback(sec);
    },sec*1000);
}


func((val)=> {
    console.log(val);
    func((val)=> {
        console.log(val);
        func((val)=> {
            console.log(val);
        },3);
    },2);
},1);



