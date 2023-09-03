function solution(num_list) {
    var answer = -1;
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] < 0) {
            answer = num_list.indexOf(num_list[i]);
            break;
        }
    }
    return answer;
}