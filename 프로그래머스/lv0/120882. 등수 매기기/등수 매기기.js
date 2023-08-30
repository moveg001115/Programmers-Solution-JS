function solution(score) {
    var answer = new Array(score.length).fill(1);
    
    score = score.map((el) => (el[0] + el[1]) / 2);
    
    for(let i = 0; i < score.length; i++) {
        for(let j = 0; j < score.length; j++) {
            if(score[i] < score[j]) answer[i]++;
        }
    }
    return answer;
}