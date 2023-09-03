function solution(num_list) {
    var answer = 0;
    if(num_list.length > 10) {
        let sum = 0
        for(let i = 0; i < num_list.length; i++) sum += num_list[i];
        answer = sum;
    }
    else {
        let val = 1;
        for(let i = 0; i < num_list.length; i++) val *= num_list[i];
        answer = val;
    }
    return answer;
}