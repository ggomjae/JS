const pms = new Promise( (resolve,reject) =>{
  console.log('promise 생성');
  const a = 10;
  const b = 20;

  if(a+b > 20){
      resolve(a+b);
  }else{
      reject('error');
  }
});
pms.then((result)=>{
    console.log(result);
    return result;
}).then((result2)=>{
    console.log(result2);
}).catch(()=>{
    console.log('Error');
})