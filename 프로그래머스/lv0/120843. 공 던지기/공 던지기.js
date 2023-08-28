function solution(numbers, k) {
    var answer = 0;
    let i = 0;
    while(k != 0) {
        answer = numbers[i];
        i = (i + 2) % numbers.length;
        k--;
    }
    return answer;
}