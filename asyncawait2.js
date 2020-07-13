// fetchUser를 비동기로 사용자를 긁어온다고 생각해보자.

//1
var user = fetchUser('domain.com/users/1');
if (user.id === 1) {
  console.log(user.name);
}


//2
function logName() {
    var user = fetchUser('domain.com/users/1');
    if (user.id === 1) {
      console.log(user.name);
    }
}


//3
async function logName() {
    var user = await fetchUser('domain.com/users/1');
    if (user.id === 1) {
      console.log(user.name);
    }
}

// 3단변화. 이게 async await

//  async function 함수명() {
//      await 비동기_처리_메서드_명();
//  }

function fetchItems() {
    return new Promise(function(resolve, reject) {
      var items = [1,2,3];
      resolve(items)
    });
}
  
async function logItems() {
    var resultItems = await fetchItems();
    console.log(resultItems); // [1,2,3]
}

// fetchItems의 결과값으로 resolve(items)로 items가 var resultItems로 저장된다.
