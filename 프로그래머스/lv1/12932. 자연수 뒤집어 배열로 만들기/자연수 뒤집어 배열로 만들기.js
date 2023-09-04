function solution(n) {
    var answer = [];
    n += "";
    for(let i = n.length - 1; i >= 0; i--) answer.push(parseInt(n[i]));
    return answer;
}