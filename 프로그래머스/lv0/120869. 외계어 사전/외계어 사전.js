function solution(spell, dic) {
    var answer = 0;
    let i, j;
    
    for(i = 0; i < dic.length; i++) {
        for(j = 0; j < spell.length; j++) {
            if(dic[i].includes(spell[j])) continue;
            else break;
        }
        if(j === spell.length) {
            answer = 1;
            break;
        }
        else answer = 2;
    }
    return answer;
}