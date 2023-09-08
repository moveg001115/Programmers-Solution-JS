function solution(code) {
    var answer = "";
    let mode = 0;
    
    for(let idx = 0; idx < code.length; idx++) {
        if(mode === 0) {
            if(code[idx] === "1") mode = (mode + 1) % 2;
            else {
                if(idx % 2) continue;
                else answer += code[idx];
            }
        }
        else {
            if(code[idx] === "1") mode = (mode + 1) % 2;
            else {
                if(idx % 2) answer += code[idx];
                else continue;
            }
        }
    }
    
    if(answer === "") answer = "EMPTY";
    return answer;
}