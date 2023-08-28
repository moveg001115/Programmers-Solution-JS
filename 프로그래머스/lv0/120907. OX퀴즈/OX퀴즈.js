function solution(quiz) {
    var answer = [];
    let arr = [];
    
    for(let i = 0; i < quiz.length; i++) arr.push(quiz[i].split("="));
    for(let i = 0; i < arr.length; i++) {
        if(eval(arr[i][0]) === eval(arr[i][1])) answer.push("O");
        else answer.push("X");
    }
    return answer;
}