function solution(my_string, is_prefix) {
    var answer = 0;
    for(let i = 0; i < my_string.length; i++) {
        let tmp = "";
        for(let j = 0; j < is_prefix.length; j++) {
            tmp += my_string[j];
        }
        if(tmp === is_prefix) return 1;
        else return 0;
    }
}