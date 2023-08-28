function solution(slice, n) {
    var answer = 1;
    while((((answer * slice) % n) !== 0) && ((answer * slice) / n) < 1) answer++;
    return answer;
}