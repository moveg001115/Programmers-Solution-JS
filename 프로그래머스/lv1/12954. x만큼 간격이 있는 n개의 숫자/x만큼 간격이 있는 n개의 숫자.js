function solution(x, n) {
    var answer = [];
    let tmp = x;
    for(n; n > 0; n--) {
        answer.push(x);
        x+=tmp;
    }
    return answer;
}