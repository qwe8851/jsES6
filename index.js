// Spread, rest 파라미터 연습문제 8개


// 1. spread 문제 1 - 위 코드의 출력 결과는?
var a = [1, 2, 3];
var b = '김밥';
var c = [...b, ...a];
console.log(c);
// 출력결과 : ['김', '밥', 1, 2, 3]





// 2. spread 문제 2 - 위 코드의 출력 결과는?
var a = [1, 2, 3];
var b = ['you', 'are'];
var c = function (a, b) {
    // console.log([[...a], ...[...b]][1])
    console.log([[...a], ...[...b]][1]);
}
c(a, b);
// 출력결과 : you
// [[1, 2, 3], 'you', 'are'][1]이므로 you가 출력.





// 3. default 파라미터 문제 1
function 함수(a = 5, b = a * 2) {
    console.log(a + b);
    return 10
}
함수(3);
// 출력결과 : 9
// a파라미터가 들어왓으므로 a=3, b=6





// 4. default 파라미터 문제 2
function 함수(a = 5, b = a * 2) {
    console.log(a + b);
}
함수(undefined, undefined);
// 출력결과 : 15
// 변수가 정의되않으면 undefined임.
// 파라미터 자리에 undefined를 집어넣으면 아무것도 안들어왔다고 판단하고 defualt파라미터가 발동됨.





// 5. array를 만들어주는 함수를 제작하고 싶습니다.
// 이렇게 작성하면[1, 2, 3, 4, 5]가 출력되어야합니다.
// 함수에 숫자를 100개 집어넣으면 Array안에 숫자100개가 들어가야하고요.
// 어레이라는 함수를 어떻게 만들면 될까요 ? (new 키워드 사용금지)
function 어레이(...rest) {
    for (let i = 0; i < rest.length; i++) {
        console.log(rest[i]);

    }
}

let newArray = 어레이(1, 2, 3, 4, 5);
console.log(newArray);





// 6. 최댓값 구하기
// Math.max()사용해서 최대값 구하기
let numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
console.log(Math.max(...numbers));





// 7. 글자를 알파벳순으로 정렬해주는 함수를 만들고 싶습니다.
// 일단 자바스크립트는 array 내의 데이터를 알파벳순으로 정렬하고 싶을 때
// sort()라는 array 내장함수를 붙여 사용합니다. (array에만 적용가능)
function 정렬(str) {
    console.log([...str].sort());   // 'a', 'b', 'e', 'r'
    console.log([...str].sort().join());    //a, b, e, r
    console.log(...[...str].sort());    //a b e r
}
정렬('bear');
// 반복문을 쓰지 않고 더 쉽게 만들 수 있음. 




// 8. 데이터마이닝 기능 만들기
// 알파벳들의 출현 갯수를 세어주는 함수 만들기.
// 글자세기('aacbbb') 라고 입력하면 콘솔창에
// { a: 2, b : 3, c : 1 }
// ▲ 이렇게 출력해주는 글자세기() 라는 함수만들기.
function 글자세기(str) {
    let result = {};

    [...str].forEach(function (a) {
        if (result[a] > 0) {
            result[a] ++;
        } else {
            result[a] = 1;
        }
    })
    console.log(result);
}
글자세기('aacbbb');
// result라는 object안에 결과[a](결과.a)라는 항목이 있으면 +1해주고
// 없으면 1로 등록(a:1이렇게)해달라고 짠거임

// 헷갈리는 부분이 object타입은 key값을 미리 정의해주지 않고 값을 할당해달라고 해도 그에 맞게 key/value가 들어가는건가?
// object다루는 법을 더 연습해봐야 할 것 같음