function solution(letter) {
    let answer = '';
    const arr = letter.split(" ");
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    const propertyKeysArr = Object.keys(morse);
    const propertyValsArr = Object.values(morse);
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < propertyKeysArr.length; j++) {
            if(arr[i] === propertyKeysArr[j])
                answer += propertyValsArr[j];
        }
    }
    return answer;
}