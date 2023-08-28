function solution(polynomial) {
    var answer = [];
    let tmp1 = [];
    let tmp2 = [];
    let coef = 0;
    let constNum = 0;
    
    polynomial = polynomial.split(" + ");
    tmp1 = polynomial.filter((el) => el.endsWith("x"));
    tmp2 = polynomial.filter((el) => !isNaN(el));
    
    tmp1 = tmp1.map((el) => el.replace("x", ""));
    tmp1.map((el) => el === "" ? coef++ : coef+=Number(el));
    
    tmp2.map((el) => constNum+=Number(el));
    
    if(coef === 0) {
        if(constNum === 0) {
            answer = "";
        }
        else {
            answer = constNum + "";
        }
    }
    else if(coef === 1) {
        if(constNum === 0) {
            answer = "x";
        }
        else {
            answer = "x" + " + " + constNum;
        }
    }
    else {
        if(constNum === 0) {
            answer = coef + "x";
        }
        else {
            answer = coef + "x" + " + " + constNum;
        }
    }
    return answer;
}