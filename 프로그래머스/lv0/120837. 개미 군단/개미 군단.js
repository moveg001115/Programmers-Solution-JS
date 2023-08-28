function solution(hp) {
    let arr = [];
    var answer = 0;
    arr.push(Math.trunc(hp / 5), Math.trunc((hp % 5) / 3), ((hp % 5) % 3))
    for(let i = 0; i < arr.length; i++)
        answer += arr[i];
    return answer;
}