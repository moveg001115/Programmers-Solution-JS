function solution(id_pw, db) {
    var answer = '';
    let findId = db.filter((el) => el[0] === id_pw[0]);
    let findPw = findId.filter((el) => el[1] === id_pw[1]);
    
    if(findId.length === 0) answer = "fail";
    else if(findPw.length === 0) answer = "wrong pw";
    else answer = "login";
    return answer;
}