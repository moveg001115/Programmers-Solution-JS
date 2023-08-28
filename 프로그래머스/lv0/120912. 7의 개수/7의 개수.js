function solution(array) {
    var answer = 0;
    array = array.map((el) => String(el));
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            if(array[i][j] === "7") answer++;
        }
    }
    return answer;
}