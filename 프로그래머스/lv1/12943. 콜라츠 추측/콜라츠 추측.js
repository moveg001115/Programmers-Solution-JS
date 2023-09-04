function solution(num) {
    var answer = 0;
    do {
        if(num === 1) break;
        if(answer == 500) return -1;
        num = num % 2 ? num * 3 + 1 : Math.floor(num / 2);
        answer++;
    } while(num !== 1);
    return answer;
}