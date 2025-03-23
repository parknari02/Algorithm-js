//콜라츠 수열 만들기
function solution(n) {
    var answer = [];
    answer.push(n);
    while(n != 1) {
        if (n % 2 == 0) {
            n = n / 2;
            answer.push(n);
        }
        else {
            n = 3 * n + 1;
            answer.push(n);
        }
    }
    return answer;
}