function solution(my_string, is_suffix) {
    var answer = 0;
    for(let i = 0; i < my_string.length; i++) {
        let tmpStr = "";
        for(let j = i; j < my_string.length; j++) {
            tmpStr += my_string[j];
        }
        if(tmpStr === is_suffix) {
            answer = 1;
            break;
        }
    }
    return answer;
}