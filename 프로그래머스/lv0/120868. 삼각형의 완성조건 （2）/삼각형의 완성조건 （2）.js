function solution(sides) {
    var answer = 0;
    sides.sort((a, b) => a - b);
    for(let i = 1; i <= sides[1]; i++) {
        if(i + sides[0] > sides[1]) answer++;
    }
    let tmp = sides[1] + 1;
    while(tmp < sides[0] + sides[1]) {
        answer++;
        tmp++;
    }
    return answer;
}