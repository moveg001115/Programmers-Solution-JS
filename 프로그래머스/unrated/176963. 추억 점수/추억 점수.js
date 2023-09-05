function solution(name, yearning, photo) {
    let answer = [];
    let thePeople = {};
    
    for(let i = 0; i < name.length; i++) {
        thePeople[name[i]] = yearning[i];
    }
    
    for(let i = 0; i < photo.length; i++) {
        let theSum = 0;
        for(let j = 0; j < photo[i].length; j++) {
            if(thePeople[photo[i][j]] === undefined) {
                continue;
            }
            else theSum += thePeople[photo[i][j]];;
        }
        answer.push(theSum);
    }
    return answer;
}