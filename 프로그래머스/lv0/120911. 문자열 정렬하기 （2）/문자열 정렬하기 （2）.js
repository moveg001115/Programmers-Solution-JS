function solution(my_string) {
    var answer = my_string.toLowerCase().split("").sort().toString().replaceAll(",", "");
    return answer;
}