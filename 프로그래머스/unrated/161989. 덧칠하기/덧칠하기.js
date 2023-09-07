function solution(n, m, section) {
    var answer = 0;
    
    let area = 0;
    
    section.forEach((n) => {
        if(n > area) {
            area = n + m - 1;
            answer++;
        }
    });
    return answer;
}