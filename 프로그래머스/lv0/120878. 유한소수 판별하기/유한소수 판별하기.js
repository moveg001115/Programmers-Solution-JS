let getGCD = (num1, num2) => {
    let gcd = 1;

    for(let i=2; i<=Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }

    return gcd;
}

function solution(a, b) {
    var answer = 2;
    let num = getGCD(a, b);
    b /= num;
    while (b%2 === 0) b = b/2;
    while (b%5 === 0) b = b/5;
    answer = b === 1 ? 1 : 2;
    return answer;
}
