function solution(rsp) {
    let sequenceRSP = rsp.split("");
    let answer = "";
    
    for(let i = 0; i < sequenceRSP.length; i++) {
        answer += sequenceRSP[i] === "2" ? "0" : (sequenceRSP[i] === "0" ? "5" : "2");
    }
    
    return answer;
}