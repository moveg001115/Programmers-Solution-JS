function solution(n) {
    var answer = 1;
    while((((answer * 7) % n) !== 0) && (((answer * 7) / n) < 1)) {
        answer++;
    }
    return answer;
}