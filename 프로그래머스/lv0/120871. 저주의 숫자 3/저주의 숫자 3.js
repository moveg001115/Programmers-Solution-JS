function solution(n) {
    var answer = 0;
    let tmp = 0;
    for(let i = 1; i <= n; i++) {
        tmp++;
        while(tmp % 3 === 0 || String(tmp).includes("3")) {
            tmp++;
        }
        answer = tmp;
    }
    return answer;
}