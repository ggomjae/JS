function solution(N, number) {
    const cache = new Array(9).fill(0).map(el => new Set());
    for(let i=1; i<9; i++){
        cache[i].add('1'.repeat(i) * N);
        for (let j=1; j < i; j++) {
            for(const arg1 of cache[j]){
                for(const arg2 of cache[i-j]){
                    cache[i].add(arg1+arg2);
                    cache[i].add(arg1-arg2);
                    cache[i].add(arg1*arg2);
                    cache[i].add(arg1/arg2>>0);
                }
            }
        }
        if(cache[i].has(number)) return i; 
    }
    return -1;
}

// new Array(9) -> 9개의 빈 배열 . cache[0] 하면 undefined 나옴
// Array.prototype.fill(temp,to,from) to~from index 까지 temp로 채우기 [ 0 부터 세는 index]
// Array.prototype.map(x => 2*x) -> 각요소에 대하여 계산하고 계산된 값으로 '새로운' 배열 반환
// set.add  Set { a , b , c } 여기서 set.add('c') 해도 안들어감. 중복 , 아무 type 다 가능
// '1'도 String type
// '1'.repeat -> String.prototype.repeat(t) : t번 반복.