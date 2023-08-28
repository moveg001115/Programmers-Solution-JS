function solution(n) {
    let answer = 0;
    for(let num = 1; num <= n; num++) {
        let divisor = 0;
        let tmp = 1;
        while(tmp <= num) {
            if(num % tmp === 0)
                divisor++;
            if(divisor > 2) {
                answer++;
                break;
            }
            tmp++;
        }
    }
    return answer;
}