function solution(balls, share) {
    var answer = 0;
    let x = 1;
    let y = 1;
    let z = 1;
    
    for(let i = 1; i <= balls; i++) x *= i;
    for(let i = 1; i <= balls - share; i++) y *= i;
    for(let i = 1; i <= share; i++) z *= i;
    
    answer = x / (y * z);
    return Math.round(answer);
}