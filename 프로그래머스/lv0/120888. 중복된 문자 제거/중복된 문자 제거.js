function solution(my_string) {
    let answer = '';
    for(let i = 0; i < my_string.length; i++) {
        let tmp = my_string[i];
        for(let j = 0; j < i; j++) {
            if(tmp === my_string[j]) {
                tmp = "";
                break;
            }
        }
        answer += tmp;
    }
    return answer;
}