function solution(array, n) {
    var answer = 0;
    array = array.filter((el) => el === n);
    answer = array.length;
    return answer;
}