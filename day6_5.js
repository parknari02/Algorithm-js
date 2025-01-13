//수열과 구간 쿼리 2
function solution(arr, queries) {
    let result = [];
    for(let lst = 0; lst < queries.length; lst++) {
        let s = queries[lst][0];
        let e = queries[lst][1];
        let k = queries[lst][2];
        let sub = [];
        for(let i = s; i <= e; i++) {
            if (arr[i] > k) {
                sub.push(arr[i]);
            }
        }
        if (sub.length === 0) {
            result.push(-1);
        }
        else {
            result.push(Math.min(...sub));
        }

    }
    return result;
}