function solution(n) {
    var answer = 0;
    (n + "").split("").map((el) => answer += Number(el));
    return answer;
}