// Reference data type과 예제 3가지


// 1. primitive data type
// - 변수에 값이 그대로 저장되는 그냥 문자와 숫자
let 변수 = 1234;
let 어레이 = [1, 2, 3];     // [1, 2, 3]이 저쪽에 있다는 화살표가 저장 → 이게 reference 타입






// 2. reference data type
// - array, object는 변수에 값이 저장되지 않음(주소 저장)

let obj = { name: 'kim' }
// - obj에는 {name:'kim'}이 저쪽에 있습니다~ 라고 알려주는 "화살표"가 저장





// 3. test
// 3-1. primitive type test
let primitive이름1 = 'kim';
let primitive이름2 = primitive이름1;
primitive이름1='pack';

console.log(primitive이름1);     // 'park'
console.log(primitive이름2);     // 'kim'



// 3-2. reference type test
let reference이름1 = { name: 'kin' }
let reference이름2 = reference이름1;
reference이름1.name='park';

console.log(reference이름1);     // 'park'
console.log(reference이름2);     // 'park'
// reference data type은 값이 저장되는게 아니라 화살표(주소)가 저장되기 때문에 주소의 값을 변경함
// 그래서 이름1을 변경하면 이름2도 변경되는 것

// 그래서 array, object는 함부로 복사해서 쓰면 안됨.
// 오브젝트는 복사 기계를 만들어서 복사를 해야 함



// 3-3. reference type 비교
let r이름1 = { name: '김' }
let r이름2 = { name: '김' } //object는 값이 아닌 화살표가 저장된다고 했음.

r이름1 == r이름2        // false
// 따라서 이런식으로 비교를 하면 r이름1의 화살표와 r이름2의 화살표가 동일하냐고 물어보는것과 같음



// 4. obj변경 함수 생성
let 이름1 ={nane:'kim'}

// 4-1. obj의 특정 값 변경
function func(obj) {
    obj.name = 'Park';
}
func(이름1);    //성공 : pack으로 변경됨

// 4-2. obj 통째로 변경
function func2(obj){
    obj = {name:'park'}
}
func2(이름1);   //실패.. : 변경 안됨.


// 4-1과 4-2는 왜 결과값이 다를까?
// - 4-2처럼 obj를 새로 하나 생성하겟다는 말임.
//   변경(let obj = 이름1)와 같다는 의미임.
//   그래서 기존화살표가 아닌 새로 화살표가 생성(변수가 생성되었으므로)되는것
//   즉, 이름1을변경한 것이 아니라 새로운 obj라는 함수를 만들어 재할당 한 것이라고 생각하면 됨.
//   그래서 파라미터 변수={}를 해봤자 이름1의 obj 변화가 없는것(파라미터변수만 생성/변경 된 것)