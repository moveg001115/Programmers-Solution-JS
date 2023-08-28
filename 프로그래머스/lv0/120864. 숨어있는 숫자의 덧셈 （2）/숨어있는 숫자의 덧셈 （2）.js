function solution(my_string) {
    var answer = 0;
    for(let i = 0; i < my_string.length; i++) {
        let tmp = "";
        while(!isNaN(Number(my_string[i]))) {
            tmp += my_string[i];
            i++;
        }
        answer += Number(tmp);
    }
    return answer;
}