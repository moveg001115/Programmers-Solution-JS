function solution(a, b) {
    var answer = Number(String(a).concat(String(b))) > Number(String(b).concat(String(a))) ? Number(String(a).concat(String(b))) : Number(String(b).concat(String(a)));
    return answer;
}