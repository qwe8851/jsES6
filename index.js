// 변수 연습문제 6가지


// 문제 1
    함수();

    function 함수(){
        console.log(안녕);
        let 안녕 = 'Hello';
    }
    // - var : hoisting 시 undefine 할당 O
    // let/const : hoisting 시 undefined 할당 X (TDZ/uninitalized라고 부름)




// 문제 2
    함수();
    var 함수 = function(){
        console.log(안녕);
        var 안녕 = 'Hello';
    }
    // - function 함수(){} : 전부 Hoisting 됨
    // - var 함수 = function(){} : 선언 부분만 Hoisting

    // 위 코드는 js가 아래처럼 해석함
    var 함수;
    함수(); //여기서 함수가 아니라는 에러를 띄워 줌.
    함수 = function () {
        console.log(안녕);
        var 안녕 = 'Hello';
    }




// 문제 3
    let a = 1;
    var 함수 = function(){
        a = 2;
    }
    console.log(a);
// 이건 왜 a가 1이 나올까?
// 바로 함수를 실행하지 않았기 때문.
// console.log를 찍기 전에 함수();를 실행하는 문장을 넣어주면 a가 2로 바뀌게 됨.




// 문제 4
let a = 1;
var b = 2;
window.a = 3;   // 나랑 가장 같은 것을 사용하려고 하기 때문에 a는 1이 나옴 
window.b = 4;   // 얘는 기존 b값을 대체하게 됨.




// 문제 5
setTimeout(function () { console.log(1) }, 1000);
setTimeout(function () { console.log(2) }, 2000);
setTimeout(function () { console.log(3) }, 3000);
setTimeout(function () { console.log(4) }, 4000);
setTimeout(function () { console.log(5) }, 5000);
// 위 코드를 아래 코드처럼 반복문을 사용해서 수정하려고 함

for(var i=0; i<5; i++){
    setTimeout(function () { console.log(i) }, i*1000);
}
// 근데 얘를 실행하면 5라는 숫자가 5번 실행됨. 왜일까?


var i = 5;  // 반복문이 다 실행되고 전역변수로 남음
for (var i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i) }, i * 1000);
}
// 바로 이렇게 실행되기 때문임
// i값은 반복문이 다 돌고 전역변수로 남고, 
// 1~5초 후 코드를 실행하려고 i를 찾는데 i에는 5만 남아있기 때문에 5만 5번 실행되는 것 

// 이런경우는 var대신 let을 실행해주면 됨. let은 범위가 중괄호 이기 때문!
for (let i =0; i<6; i++){
    let i =0;
    setTimeout(function () { console.log(i) }, i * 1000);
}
// 그래서 이렇게 변경해주면 원하는 대로 답이 잘 나오는걸 확인할 수 있음.





// 문제 6
// 이벤트 리스너를 반복시키고 싶음
var 버튼들 = document.querySelectorAll('button');
var 모달창들 = document.querySelectorAll('div');

버튼들[0].addEventListener('click', function(){
    모달창들[0].style.display = 'block'
});

버튼들[1].addEventListener('click', function () {
    모달창들[1].style.display = 'block'
});

버튼들[2].addEventListener('click', function () {
    모달창들[2].style.display = 'block'
});
// 위와 같은 코드를 아래처럼 반복문 이용해 축약하려고 함.
for (var i =0; i<4; i++){
    버튼들[i].addEventListener('click', function () {
        모달창들[i].style.display = 'block'
    });
}
// 이 문제의 해답은 for반복문 안의 변수를 let키워드로 변경해서 선언해주면 됨.
// 이 코드에선 나중에 click시 이벤트리스너가 동작하면 안의 코드를 실행해주게 되는데 
// 그래서 이미 반복문이 모두 돈 후에 안의 코드가 실행되게 되는것

// 그래서 범위가 중괄호인 let키워드를 사용해서 변수를 생성하게 되면
// 오류없이 잘 동작하게 만들 수 있음.









