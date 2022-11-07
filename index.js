// template literals / tagged literals 연습문제 2개 풀어보기 


let pants = 20;
let socks = 100;

// 단어 순서 변경 
function 해체분석기(문자들, pants, socks){
    console.log(문자들[1] + pants + 문자들[0] + socks);
}
해체분석기`바지${pants} 양말${socks}`



// 바지가 0roaus 바지가 다 팔렷다는 안내 내보내기
function 해체분석기2(글자들, 변수1, 변수2){
    if(변수1 == 0){
        console.log(`바지 다 팔림`);
    }
}
해체분석기2`바지${pants} 양말${socks}`
