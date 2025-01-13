//마지막 두 원소
function solution(num_list) {
    let len = num_list.length;
    let a = num_list[len-1];
    let b = num_list[len-2];
    
    if (a > b){
        num_list.push(a-b);    
    }
    else {
        num_list.push(2*a);
    }
    return num_list;
}
