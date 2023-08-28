function solution(age) {
    age = age.toString();
    var answer = '';
    for(let i = 0; i < age.length; i++) {
        answer += String.fromCharCode(Number(age.charAt(i)) + 97);
    }
    return answer;
}