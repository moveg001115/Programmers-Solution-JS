function solution(keyinput, board) {
    var answer = [0, 0];
    const range = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
    for(let i = 0; i < keyinput.length; i++) {
        if(keyinput[i] === "left" && answer[0] > -range[0]) answer[0]--;
        else if(keyinput[i] === "right" && answer[0] < range[0]) answer[0]++;
        else if(keyinput[i] === "down" && answer[1] > -range[1]) answer[1]--;
        else if(keyinput[i] === "up" && answer[1] < range[1]) answer[1]++;
    }
    return answer;
}