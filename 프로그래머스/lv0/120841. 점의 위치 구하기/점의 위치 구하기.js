function solution(dot) {
    let answer;
    if((dot[0] > 0) && (dot[1] > 0)) {
        answer = 1;
    } else if((dot[0] < 0) || (dot[1] < 0)) {
        if(dot[0] < 0) {
            if(dot[1] < 0)
                answer = 3;
            else
                answer = 2;
        } else if(dot[1] < 0) {
            if(dot[0] < 0)
                answer = 3;
            else
                answer = 4
        }
    }
    return answer;
}