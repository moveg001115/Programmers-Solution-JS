function solution(angle) {
    var answer = (angle === 180) ? 4 : (((angle < 180) && (angle > 90)) ? 3 : ((angle === 90) ? 2 : ((angle < 90) && (angle > 0)) ? 1 : 0));
    return answer;
}