// 자바스크립트 함수 업그레이드하기(default parameter / arguments)

function 더하기(a, b) {
    console.log(a + b);
}
더하기(1);  // 파라미터가 2개 들어가는 함수인데 하나만 써도 오류 안남





// 1. defult 파라미터
function 더하기2(a, b = 10) {   // b자리에 파라미터를 안넣었을 때만 발동!!
    console.log(a + b);
}
더하기2(1); //두번째 파라미터를 넣지 않고 실행해도 default 파라미터가 자동으로 실행됨

// 이런것도 됨 1 - 연산
function 더하기2(a, b = 2 * a) { };

// 이런것도 됨 2 - 함수
function 임시함수() {
    return 10;
}
function 더하기2(a, b = 임시함수()) { };






// 2. arguments
function 함수(a, b, c) {
    console.log(arguments[0]);  // 모든 파라미터를 []안에 넣은 변수 (array와 유사)
    console.log(arguments[1]);
    console.log(arguments[2]);
}
함수(1,2,3);

// 2-1. 이렇게 활용할 수 있어요
function 함수2(a, b, c, d, e) {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        // arguments를 활용해서 확장성 가득한 코드를 작성할 수 있음.
    }
    
}
함수2(1,2,3,4,5);
// 함수에서 쓰는 점3개 Rest 파라미터

function 함수(a, b, c) {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
// 함수(2,3,4);




// 1. rest paramseter
function 함수2(...rest) {
    console.log(파라미터들);
}
함수(1,2,3,4,5,3,2,2,3,4);
// ...기능은 spread operator와 rest parameter기능 두가지가 있음
// 함수의 파라미터 자리에 ...을 넣어주면 이 자리에 오는 모든 파라미터들을 []안에 보관해줌
// 그래서 파라미터를 무한히 쓸 수 있음


// 1-1. arguments와 rest parameter의 ckdl
// - arguments는 모든 파라미터를 []에 담아줌
// - rest parameter는 "이 자리"에 오는 모든 파라미터를 []에 담아줌


function func(...rest) {
    for (let i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}
func(1,2,3,3,4,34);
// arguments는 파라미터가 몇 개 들어올지를 먼저 정해줘야 하는데
// rest는 파라미터가 몇 개 들어올지 미리 지정해주지 않아도 된다.

// 주의점 1. 가장 뒤에 사용
//           function func (a, b, ...rest)는 가능하지만 (...rest, a, b)요딴거 안됨
//           ...rest의 뜻은 이 뒤에 오는 모든 파라미터들을 여기에 담아달라는 뜻이기 때문

