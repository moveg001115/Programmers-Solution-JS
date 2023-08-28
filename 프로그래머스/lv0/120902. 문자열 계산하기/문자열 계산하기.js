function solution(my_string) {
    var answer = 0;
    my_string = my_string.split(" ");
    let oper = 1;
    for(let i = 0; i < my_string.length; i++) {
        if(my_string[i] === "+") oper = 1;
        else if(my_string[i] === "-") oper = -1;
        else answer = answer + oper * my_string[i];
    }
    return answer;
}