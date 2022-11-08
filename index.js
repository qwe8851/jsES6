// ...Spread Operator

let arr = ['hello', 'world'];
console.log(...arr) // 1. Array에 붙이면 대괄호를 제거해줌.

let 문자 = 'hello';
console.log(...문자);   // 2. 문자에 붙이면 펼쳐줌. 어캐 가능한걸까?
console.log('h', 'e', 'l', 'l','o');

console.log(문자[1]) //e가 나옴 : 문자도 arr처럼 인덱싱이 가능함





// 3. 어디에 쓰는게 좋을까
let a = [1,2,3];
let b = [4,5];

let c = [...a, 4,5];
let d = [...a, ...b];   // 이렇게 어레이를 합치거나 복사할때 좋음
// 보기편해서보다 "deep copy"할 때 유용


// 4. deep copy?
let arr1 = [1,2,3];
let copy = arr1;   // 그냥 등호로 복사하면 값을 공유함(reference datat type(arr/obj))
                   // 5. 그럼 완전히 각각 독립적인 값을 가지도록 arr,obj를 복사하려면 어캐야 하지? 
arr1[3] = 4;

console.log(arr1);
console.log(copy2);   //b는 변경하지 않았음에도 값이 변경됨




// 5. 각각 독립적인 값을 가지게 arr,obj복사하기
let arr2 = [1, 2, 3];
let copy2 = [...arr2];   // 독립적인 arr생성 가능(deep copy)

arr2[3] = 4;

console.log(arr2);      // [1,2,3,4]
console.log(copy2);     // [1,2,3]


// 5-2. obj일때는?
let obj1 = { a: 1, b: 2 };
let obj2 = {...obj2, c: 3 }; 

console.log(obj2);  // { a: 1, b: 2, c: 3 }
// 중괄호, 대괄호 벗기기 둘 다 ok

// 근데 카피하다가 값 중복이 일어나면?
let obj3 = { a: 1, b: 2 };
let obj4 = { ...obj3, a: 3 };   //이렇게 넣으면 { a: 1, b: 2, a: 3 }

console.log(obj2);    // { a: 3, b: 2 };
// 중복이 일어나면 가장 뒤에 있는 값을 적용함.


// ✔️ ...은 항상 중괄호나 대괄호 안에 써야 한다.









