function solution(my_string, num1, num2) {
    let answer = "";
    let tmp;
    for(let i = 0; i < my_string.length; i++) {
        if(i === num1) {
            tmp = my_string[num1];
            answer += my_string[num2];
        } else if(i === num2) answer += tmp;
        else answer += my_string[i];
    }
    return answer;
}