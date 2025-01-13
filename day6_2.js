//수 조작하기1
function solution(n, control) {
    for(let val of control) {
        if(val === "w"){
            n += 1;
        }
        else if (val === "s") {
            n -= 1;
        }
        else if (val === "d"){
            n += 10;
        }
        else {
            n -= 10;
        }
    }
    return n;
}