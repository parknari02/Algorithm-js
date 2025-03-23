//수 조작하기2
function solution(numLog) {
    var answer = '';
    for (let i = 0; i < numLog.length - 1; i++) {
        let val = numLog[i+1] - num[i];
        if (val === 1) {
            answer += "w";
        }
        else if (val === -1) {
            answer += "s";
        }
        else if (val === 10) {
            answer += "d";
        }
        else {
            answer += "a";
        }
    }
    return answer;
}