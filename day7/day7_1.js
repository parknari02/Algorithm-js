//수열과 구간 쿼리 2
function solution(arr, queries) {
    for(let lst = 0; lst < queries.length; lst++) {
        let s = queries[lst][0];
        let e = queries[lst][1];
        let k = queries[lst][2];
        for(let i = s; i <= e; i++) {
            if (i % k === 0) {
                arr[i] = arr[i] + 1;
            }
        }
    }
    return arr;
}