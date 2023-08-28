function solution(s) {
    let answer = 0;
    s = s.split(" ");
    for(let i = 0; i < s.length; i++) {
        if(isNaN(s[i])) answer -= Number(s[i - 1]);
        else answer += Number(s[i]);
    }
    return answer;
}