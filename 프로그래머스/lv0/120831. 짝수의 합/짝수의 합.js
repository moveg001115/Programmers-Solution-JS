function solution(n) {
    let tmp = Math.floor(n / 2);
    var answer = tmp * (tmp + 1);
    return answer;
}