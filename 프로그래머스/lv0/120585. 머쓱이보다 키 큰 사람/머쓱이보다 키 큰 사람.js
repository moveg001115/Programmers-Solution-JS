function solution(array, height) {
    var answer = 0;
    answer = array.filter((el) => el > height).length;
    return answer;
}