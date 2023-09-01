function solution(num, total) {
    var answer = [];
    let startN = Math.round((total / num) - Math.floor(num / 2));
    for(let i = startN; i < startN + num; i++) answer.push(i);
    return answer;
}