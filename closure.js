a = (function () {
    
        var privatefunction = function () {
            alert('hello')
            console.log('a')
        }

        return {
            publicfunction : function () {
                privatefunction();
            }
        }
})();

// 크게 본다면 a에 return publicfunction이 되고 즉시 실행으로 (); -> publicfunction(); 
// publicfunction() -> privatefunction() -> alert('hello')

// 중요한것기 privatefunction은 무조건 publicfunction으로만 출력할 수 있다는게 중요
