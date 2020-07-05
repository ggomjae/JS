function fibonacci(n) {
    var pre = 0;
    var cur = 1;
    var last = 0;
    for(var num = 1; num<n; num++){
      last = pre + cur;
      pre = cur;
      cur = last;
    }
    return last;
  }
 
  console.log(fibonacci(3));
///////////////////////////////////////////////////////////////////////
  function fibonacci(num) {
    if(num < 2) return num;
    return fibonacci(num-1) + fibonacci(num-2);
  }
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log(fibonacci(3))