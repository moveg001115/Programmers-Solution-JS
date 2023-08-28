function solution(dots) {
    var answer = 0;
    let width = 0;
    let height = 0;
    let tmp = dots[0];
    dots.splice(0 , 1);
    
    for(let i = 0; i < dots.length; i++) {
        if(tmp[0] === dots[i][0]) {
            height = Math.abs(tmp[1] - dots[i][1]);
            dots.splice(i, 1);
            break;
        }
    }
    width = Math.abs(dots[0][0] - tmp[0]);
    answer = width * height;
    return answer;
}