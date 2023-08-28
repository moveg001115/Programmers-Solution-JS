function solution(n) {
    let answer = 1;
    let tmp = 1;
    while(tmp < n) {
        tmp *= answer;
        if(tmp >= n)
            break;
        else
            answer++;
    }
    if(tmp > n) answer--;
    return answer;
}