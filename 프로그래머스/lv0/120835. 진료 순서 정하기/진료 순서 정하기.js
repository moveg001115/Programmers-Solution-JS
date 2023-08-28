function solution(emergency) {
    let sorted = [];
    let answer = [];
    
    for(let i = 0; i < emergency.length; i++)
        sorted.push(emergency[i]);
    sorted.sort((a, b) => b - a);
    
    for(let i = 0; i < sorted.length; i++) {
        let tmp = sorted[i];
        answer.push(sorted.indexOf(emergency[i]));
        answer[i]++;
    }
    return answer;
}