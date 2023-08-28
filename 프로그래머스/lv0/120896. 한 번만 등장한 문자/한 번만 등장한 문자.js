function solution(s) {
    var answer = '';
    for(let i = 0; i < s.length; i++) {
        let tmp = 0;
        for(let j = 0; j < i; j++) {
            if(s[i] === s[j]) {
                tmp = 1;
                break;
            }
        }
        for(let j = i + 1; j < s.length; j++) {
            if(s[i] === s[j]) {
                tmp = 1;
                break;
            }
        }
        if(tmp === 0) answer += s[i];
    }
    answer = answer.split("").sort().toString().replaceAll(",", "");
    return answer;
}