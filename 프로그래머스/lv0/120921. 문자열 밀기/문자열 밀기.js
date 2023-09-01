function solution(A, B) {
    var answer = 0;
    if(A === B) return 0;
    A = A.split("");
    for(let i = 0; i < A.length; i++) {
        A.unshift(A.pop());
        answer++;
        if(A.join("") === B) return answer;
    }
    return answer === A.length ? -1 : answer;
}