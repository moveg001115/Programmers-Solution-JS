function solution(array) {
    var answer = [];
    let tmp = array[0];
    for(let i = 1; i < array.length; i++) {
        if(tmp < array[i]) tmp = array[i];
    }
    answer.push(tmp, array.indexOf(tmp));
    return answer;
}