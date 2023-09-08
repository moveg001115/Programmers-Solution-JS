function solution(a, b, c) {
    var answer = 0;
    let tmp = [a, b, c];
    let arr = [];
    arr = tmp.filter((el, idx) => tmp.indexOf(el) === idx);
    if(arr.length === 3) return a + b + c;
    else if(arr.length === 2) {
        return (a + b + c) * (a**2 + b**2 + c**2);
    }
    else {
        return (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3);
    }
}