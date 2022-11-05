// var let const 선언,할당,범위

function 함수() {
    var a = 1;
    let b = 2;
    if (true) {
        let b = 3;
    }
    console.log(b);  // 2
}
console.log(a);  //에러
함수();