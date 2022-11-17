// ❗이번 강의 개념은 조금 헷갈린다. 한 번 더 보기!
// Reference data type과 예제 3가지

// 1. primity data type
    let 변수 = 1234;
    // 그냥 문자와 숫자는 primitive data type이라고 함 

    let arr = [1,2,3];  //변수에 refernce가 저장됨
    let obj = {name : 'kim'};
    // Array, Object는 변수에 값이 저장이 안됨.

    // 1-1. Primitive data type 다루기 : 복사
    let name1 = 'kim';  // 'kim'
    let name2 = name1;  // 'kim
    name1 = 'pack'; // 'park

    // 1-2. Reference data type 복사
    let 이름1 = {name:'kim'};   //'kim'
    let 이름2 = 이름1;

    이름1.name='pack';  // 'pack'
    console.log(이름2.name)     // 얘도 'pack'으로 변경됨.

    // arr, obj는 reference data type임. 
    // 이름1에는 {name:'kim'}이 저장되는게 아니라 {name:'kim'}이 있는곳을 찾아가는 주소(화살표)만 저장이 됨.

    // 이름1 ↘
    //     { name:'pack'} 
    // 이름2 ↗ (요 화살표가 저장되는 것)
    // 이렇게 같은 값을 공유하고 있기 때문이 두 변수중 하나만 수정을 해도 두 변수의 값이 모두 변경됨
    
    // obj나 arr은 값으로 가는 경로(화살표)를 저장하고 있다고 했다.
    // 그래서 이름1==이름2를 하면 false가 나온다.
    // 왤까? 바로 주소는 같지만 경로(화살표)가 다르기 때문!


// 2. obj를 변경하는 함수
function 변경(obj) {
    obj.이름1 = 'Pack';
}
변경(이름1);    //'pack' 변경
// 이렇게 하면 값이 변경됨.

// ✨✨✨
function 변경2(obj) {
    obj = {name : 'Pack'}
}
변경2(이름1);   //'kim' 변경되지 않음
// 왜 이건 변경되지 않을까?
// 우선 파라미터(obj)는 변수생성&할당과 똑같음

// 그래서 
변경2(let obj = 이름1);
// 위 코드와 동일하다고 해석할 수 있음.

// 즉
// 이름1(변수)   → {name : 'kim'}
// obj(파라미터) → {name : 'pack'}
// 원래 데이터를 변경하는게 아니고, 
// 파라미터는 새로운 변수를 만드는 문법이고 거기에 새로운 reference를 주겠다는 문법이라고 생각하면 됨.