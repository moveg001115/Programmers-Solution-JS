function solution(myString, pat) {
    var answer = 0;
    myString = myString.split("");
    for(let i = 0; i < myString.length; i++) {
        myString[i] = myString[i] === "A" ? "B" : "A";
    }
    myString = myString.join("");
    return myString.includes(pat) ? 1 : 0;
}