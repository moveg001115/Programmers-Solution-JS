function solution(players, callings) {
    let sequence = {};
    for(let i = 0; i < players.length; i++) {
        sequence[players[i]] = i;
    }
    for(let i = 0; i < callings.length; i++) {
        let theIdx = sequence[callings[i]]
        let predecessor = players[theIdx - 1];
        
        players[theIdx - 1] = players[theIdx];
        players[theIdx] = predecessor;
        
        sequence[callings[i]] = theIdx - 1;
        sequence[predecessor] = theIdx;
    }
    
    return players;
}