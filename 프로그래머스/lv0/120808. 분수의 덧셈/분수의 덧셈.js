function CalGcd(a, b) {
    return a % b === 0 ? b : CalGcd(b, a % b)
}
function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var resultNumer = numer1 * denom2 + numer2 * denom1;
    var resultDenom = denom1 * denom2;
    
    var x = resultNumer;
    var y = resultDenom;
    
    const gcd = CalGcd(x, y);
    answer = [resultNumer/gcd, resultDenom/gcd];
    return answer;
}