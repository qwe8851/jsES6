// Spread, rest 파라미터 연습문제 8개


// 1. spread 문제 1 - 위 코드의 출력 결과는?
var a = [1, 2, 3];
var b = '김밥';
var c = [...b, ...a];
console.log(c);
// 예상결과 : ['김밥', 1, 2, 3]
// 출력결과 : ['김', '밥', 1, 2, 3]



// 2. spread 문제 2 - 위 코드의 출력 결과는?
var a = [1, 2, 3];
var b = ['you', 'are'];
var c = function (a, b) {
    // console.log([[...a], ...[...b]][1])
    console.log([[...a], ...[...b]][1]);
}
c(a, b);
// 예상결과 : 2
// 출력결과 : you



// 3. default 파라미터 문제 1
function 함수(a = 5, b = a * 2) {
    console.log(a + b);
    return 10
}
함수(3);
// 예상결과 : 15
// 출력결과 : 9
// 이건 이해가 간다. default파라미터로 현재 3이라는 파라미터를 넣어줫으므로 a는 3이 된다.
// 글서 b는 3*2 = 6이고 3+6해서 9출력





// 4. default 파라미터 문제 2
function 함수(a = 5, b = a * 2) {
    console.log(a + b);
}
함수(undefined, undefined);
// 예상결과 : undefined
// 출력결과 : 15
// undefined는 파라미터를 할당해주지 않은것과 동일하다는걸 배웠음. 
// undefined를 넣어줘서 default파라미터로 계산된 결과가 콘솔창에 뜨는것!





// 5. array를 만들어주는 함수를 제작하고 싶습니다.
// 이렇게 작성하면[1, 2, 3, 4, 5]가 출력되어야합니다.
// 함수에 숫자를 100개 집어넣으면 Array안에 숫자100개가 들어가야하고요.
// 어레이라는 함수를 어떻게 만들면 될까요 ? (new 키워드 사용금지)
function 어레이(...rest) {
    for (let i = 0; i < rest.length; i++) {
        console.log(rest[i]);
        
    }
}

var newArray = 어레이(1, 2, 3, 4, 5);
console.log(newArray); 






// 6. 최댓값 구하기
// Math.max()사용해서 최대값 구하기
let numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
console.log(Math.max(...numbers));







// 7. 글자를 알파벳순으로 정렬해주는 함수를 만들고 싶습니다. 
// 일단 자바스크립트는 array 내의 데이터를 알파벳순으로 정렬하고 싶을 때
// sort()라는 array 내장함수를 붙여 사용합니다. (array에만 적용가능)
function 정렬([...rest]) {
    let str = rest.sort();

    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}
정렬('bear'); 






// 8. 데이터마이닝 기능 만들기 
// 알파벳들의 출현 갯수를 세어주는 함수 만들기.
// 글자세기('aacbbb') 라고 입력하면 콘솔창에
// { a: 2, b : 3, c : 1 }
// ▲ 이렇게 출력해주는 글자세기() 라는 함수만들기.
function 글자세기([...rest]) {
    let str = rest;
    let key;
    let value;

    for (let i = 0; i < str.length; i++) {
        key = str[i];
        value = 1;
        for (let j = 0; j < i; j++) {
            if (str[i] == str[j]){
                value +=1;
            }
        }
        console.log(key + " = " + value);
    }
}
글자세기('aacbbb'); 

// 모르겠다. . 

