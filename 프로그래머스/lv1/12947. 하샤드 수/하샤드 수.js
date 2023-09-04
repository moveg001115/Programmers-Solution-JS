function solution(x) {
    let tN = 0;
    String(x).split("").map((el) => tN += Number(el));
    return x % tN ? false : true;;
}