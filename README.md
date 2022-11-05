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

<br>

### ✨ 2. 변수의 범위
```js 
function 함수(){
    var 이름 = 'kim';
    이름;
}
cosole.log(이름);   // error : 이름 is not defined 
```
var로 만들면 function안에서만 존재함<br>
하지만 let, const는 범위가 조금 더 좁음

var은 function
let const는 중괄호가 범위라고 생각하면 됨





<br><br><br><br><br>
##








