function solution(money) {
    var answer = [];
    answer.push(Math.trunc(money / 5500), money % 5500)
    return answer;
}