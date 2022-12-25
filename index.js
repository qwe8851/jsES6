// 객체지향1. Objet 생성기걔인 constructor를 만들어 써보기

let 사람 = { name: 'kim' };
let 사람2 = 사람;    // 이렇게 쓰면 값을 공유함


// ✨ 비슷한 object를 쉽게 찍어낼 수 있는 constructor 문법
// ex1. 학생 출석부 만들어보기
let 학생 = { name: 'kim', age: 15 };       // 학생obj를 여러개 생성하고 싶을때 사용하는 constructor

function 기계(){             // 이게 constructor임
    this.name = 'kim';          // 얘를 쓰면 object를 마구 뽑아쓸 수 있음.
    this.age = 15;
}
let 학생1 = new 기계();  // 이러면 학생1이라는 object가 뽑힘









// ✨ 기계로 생성되는 모든 학생 object에 sayHi()함수 추가하기
let 학생2 = { 
    name : 'kim',
    age : 18,
    sayHi(){
        console.log('안녕하세요 ' + this.name + '입니다.');
    }
}

function 기계(){
    this.name = 'kim';
    this.age = 18;
    this.sayHi() = function () {
        console.log('안녕하세요 ' + this.name + '입니다.');
    }
}

let 학생3 = new 기계();
let 학생4 = new 기계();

학생3.sayHi();
학생4.sayHi();




// constructor문법을 이용하면 object생성이 편리해지고
// this : 기계에서 새로 생성되는 object(instance)
// 기계 : object생성기계(constructor, 생성자)





// 📝 아래와 같은 상품프로젝트를 뽑아낼 수 있는 constructor 제작 & 
// 상품마다 부가세()라는 내부 함수를 실행하면 콘솔창에 상품가격*10%만큼의 부가세금액이 출력되도록 constructor수정
var product1 = { name: 'shirts', price: 50000 };
var product2 = { name: 'pants', price: 60000 };

function Produc(상품명, 가격){
    this.name = 상품명;
    this.price = 가격;
    this.부가세 = function(){
        console.log(this.price * 0.1)
    }
}

