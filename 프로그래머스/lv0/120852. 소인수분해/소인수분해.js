function solution(n) {
    let answer = [];
    let div = 2;
    while(n !== 1) {
        if(n % div === 0) {
            answer.push(div);
            while(n % div === 0) n /= div;
        }
        div++;
    }
    return answer;
}