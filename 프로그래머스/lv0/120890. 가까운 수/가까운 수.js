function solution(array, n) {
    let answer = 0;
    let tmp = [];
    let theMin;
    
    array.sort((a, b) => a - b);
    
    for(let i = 0; i < array.length; i++) {
        tmp.push(Math.abs(n - array[i]));
    }
    
    tmp.sort((a, b) => a - b);
    
    theMin = tmp[0];
    
    for(let i = 0; i < array.length; i++) {
        if(theMin === Math.abs(n - array[i])) {
            answer = array[i];
            break;
        }
    }
    return answer;
}