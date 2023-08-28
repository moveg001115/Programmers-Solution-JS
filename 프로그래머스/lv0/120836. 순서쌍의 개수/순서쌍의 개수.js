function solution(n) {
    let tmp = [];
    var answer = 0;
    for(let i = 1; i <= n; i++) {
        if(n % i === 0)
            tmp.push(i);
    }
    answer = tmp.length;
    return answer;
}