<!-- 
제목 ## 🤔
<br>
소제목 ### ✨ 
<br><br>
내용의 제목 #### 
<br><br><br>

❗ 중요
📎 참고
💡 깨달은 것




 -->













# jsES6

## 🤔 변수 신문법 총정리 (var, let, const)
> var   재선언 O 재할당 O 범위 function <br>
let   재선언 X 재할당 O 범위 {} <br>
const 재선언 X 재할당 X 범위 {} <br>

<br>

### ✨ 1. obj는 const로 만들어도 변경됨
```js
const 사람 = { 이름 : 'kim' }
사람.이름 = 'Park';
```
오브젝트 내부값을 변경해도 에러가 안남 <br>
const변수 자체를 재할당한게 아니기 때문

<br>

#### 1-2. 수정불가능한 obj를 만들고 싶으면?
```js
const 사람 = { 이름 : 'kim' }
Object.freeze(사람);

사람.이름 = 'Park';     // 변경되지 않음
```
에러는 안나지만 변경은 되지 않음<br>
에러를 나게 하려면 `'use strict';`를 추가해주면 됨.

<br><br>

### ✨ 2. 변수의 범위
```js 
function 함수(){
    var 이름 = 'kim';   // 가능
    이름;
}
cosole.log(이름);   // 에러 : 이름 is not defined 
```
var로 만들면 function안에서만 존재함<br>
하지만 let, const는 범위가 조금 더 좁음

#### 범위가 더 좁은 let, const
```js
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
```
let, const는 범위가 중괄호라고 했음<br>
그래서 b를 선언,할당 후 if문(중괄호)안에서 재할당을 하고 중괄호 바깥에서 호출을 해보면 값이 변하지 않는걸 확인할 수 있음. 

> 📎 b를 let이 아니라 var로 선언하면 3으로 변경되고, 함수 밖에서 로그를 찍어보면 에러가 뜸



<br><br>

### ✨ 3. 변수의 Hoisting
: 변수의 선언을 변수 범위 맨 위로 끌고오는 현상

```js
function 함수 (){
    ...
}

if(ture){
    ...
}

var 나이 = 30;
```
이런 코드를 작성했을때 js는 이걸 밑의 코드처럼 해석함

<br>

```js
var 나이;

function 함수 (){
    ...
}

if(ture){
    ...
}

나이 = 30;
```
변수를 만나면 선언 부분을 강제로 맨 위로 끌고와줌.<br>
이걸 호이스팅 현상이라고 함.

<br>

#### 호이스팅 현상 확인해보기 
```js
console.log(나이);  // undefined

var 나이 = 30;

console.log(나이);// 30
```
아직 변수가 선언되지 않았는데 출력하면 에러메시지를 띄워줌(변수 '나이' is not defined)<br>
undefined는 변수 선언만 하고 할당을 하지 않았을때 뜸

나이라는 변수를 맨 위로 끌어올렸기 때문에 에러가 뜨지 않고 undefined가 뜨는 것!
> 📎 함수 선언도 Hoisting이 일어남



<br><br>

### ✨ 4. 전역 변수
: 모든 곳에서 쓸 수 있는 변수
```js
let 나이=20;

function 함수(){
    console.log(나이);
}

함수(); // 20
```
바깥에서 만든 변수는 안에서 자유롭게 쓸 수 있음<br>
이걸 **전역변수**라고 함 

<br>

#### window로 전역변수 만들기
```js
window.이름 = 'kim';
```
이런식으로도 전역변수를 만들 수 있음. <br>
>📎 이게 더 권장하는 방법<br>
전역변수라는걸 한눈에 확인할 수 있기때문임~



















<br><br><br><br><br>
##








