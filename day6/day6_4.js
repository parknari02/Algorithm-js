//수열과 구간 쿼리 3
function solution(arr, queries) {
    for(let lst = 0; lst < queries.length; lst++) {
        temp = arr[queries[lst][1]];
        arr[queries[lst][1]] = arr[queries[lst][0]];
        arr[queries[lst][0]] = temp;

    }
    return arr;
}

// function solution(arr, queries) {
//     for(let [i, j] of queries) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
// }