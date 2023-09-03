function solution(num_list) {
    var answer = 0;
    let tmp1 = 1;
    let tmp2 = 0;
    
    for(let i = 0; i < num_list.length; i++) {
        tmp1 *= num_list[i];
    }
    
    for(let i = 0; i < num_list.length; i++) {
        tmp2 += num_list[i];
    }
    return Number(tmp1 < tmp2**2);
}