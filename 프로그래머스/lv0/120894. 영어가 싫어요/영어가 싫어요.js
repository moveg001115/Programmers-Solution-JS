function solution(numbers) {
    var answer = "";
    let tmpStr = "";
    const tmp = {
        "zero" : "0",
        "one" : "1",
        "two" : "2",
        "three" : "3",
        "four" : "4",
        "five" : "5",
        "six" : "6",
        "seven" : "7",
        "eight" : "8",
        "nine" : "9"
    }
    let keyArr = Object.keys(tmp);
    let valArr = Object.values(tmp);
    
    for(let i = 0; i < numbers.length; i++) {
        tmpStr += numbers[i];
        for(let j = 0; j < keyArr.length; j++) {
            if(tmpStr === keyArr[j]) {
                answer += valArr[j];
                tmpStr = "";
            }
        }
    }
    answer = parseInt(answer);
    return answer;
}