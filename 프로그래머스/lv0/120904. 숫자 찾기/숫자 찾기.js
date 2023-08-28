function solution(num, k) {
    k += "";
    num = num.toString().split("");
    var answer = num.includes(k) ? num.indexOf(k) + 1 : -1;
    return answer;
}