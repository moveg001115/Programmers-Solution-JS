function solution(before, after) {
    var answer = 0;
    before = [...before].sort();
    after = [...after].sort();
    
    for(let i = 0; i < after.length; i++) {
        if(before[i] === after[i]) {
            answer = 1;
        }
        else {
            answer = 0;
            break;
        }
    }
    return answer;
}