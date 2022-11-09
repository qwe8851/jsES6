// Spread Operator2!!! apply(), call() 함수 알아보기)


// 1.  Spread Operator-2 
// array내의 모든 데이터를 파라미터로 집어넣고 싶으면?
function 더하기(a, b, c) {
    console.log(a + b + c);
}

let arr = [10,20,30];
더하기(arr[0], arr[1], arr[2]); // 이렇게 해야하는데 이게 너무 번거러움!!!!!1

// 원래는 이렇게 했음. (apply)
더하기.apply(undefined, arr);

// 지금은 이렇게 함 (...Spread Operator)
더하기(...arr);





// 2. apply
// person1의 인사라는 함수를 person2에도 적용하고 싶으면?

let person1 = {
    인사 : function(){
        console.log('안녕');
    }
}


let person2 = {
    name : '쏘니'
}

person1.인사.apply(person2); // 이렇게 해주면
// "person1에 있는 인사라는 함수를 쓸건데 person2라는 obj에도 적용해서 실행해라"
// or
// "person.인사()라는 함수를 person2라는 obj에 있는 함수처럼 실행하라" 라는 뜻임


// 2-1. 확인은 어떻게 할 수 있을까?
let person3 = {
    인사: function () {
        console.log(this.name + ' 안녕');    
    }
}


let person4 = {
    name: '쏘니'
}

person3.인사();     // undefined 안녕
person4.인사.apply(person3);    // 쏘니 안녕





// 3. call
// apply와 비슷한 함수
let person5 = {
    인사: function () {
        console.log(this.name + ' 안녕');
    }
}


let person6 = {
    name: '쏘니'
}

// 파라미터를 넣고싶으면 함수 오른쪽에 콤마로 구분해서 넣어주면 됨
// apply와 call의 차이는 
person5.인사.apply(person6, [1, 2]);    // apply는 파라미터를 arr형태로 넣을 수 잇음
person5.인사.call(person6, 1, 2);       // 얘는 arr형태 불가

// 그럼 14번째 줄 코드도 이해가 될 듯!
더하기.apply(undefined, arr);
// 얘는 undefined라는곳에서 더하기 함수에 arr파라미터를 넣어서 실행해달라는 뜻!
// 근데 undefined를 넣었으므로 그냥 더하기()함수가 실행됨. 그럼 굳이 apply를 쓴 이유는
// 파라미터로 Array를 집어넣는게 가능하기 때문임!!

