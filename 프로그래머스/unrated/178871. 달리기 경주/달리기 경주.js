function solution(players, callings) {
    //  players에 있는 선수들의 이름과 인덱스를 저장할 sequence 객체
    let sequence = {};
    //  players 배열에 있는 선수들의 이름과 인덱스 매치하여 저장
    for(let i = 0; i < players.length; i++) {
        sequence[players[i]] = i;
    }
    //  callings 내부 원소들을 순서대로 반복
    for(let i = 0; i < callings.length; i++) {
        let theIdx = sequence[callings[i]]; //  players배열에서 현재 callings 원소의 인덱스를 찾아 theIdx에 저장
        let predecessor = players[theIdx - 1];  //  앞서 달리는 선수를 players 배열에서 찾아 predecessor에 저장
        
        //  자리 바꾸는 연산
        players[theIdx - 1] = players[theIdx];  //  앞서 달리는 선수의 자리에 현재 원소 저장
        players[theIdx] = predecessor;  //  현재 원소 자리에 앞서 달리는 선수 저장
        
        //  players의 원소들과 인덱스를 저장한 sequence 객체의 내용도 변경
        sequence[callings[i]] = theIdx - 1; //  현재 선수에 매칭되는 인덱스를 이전 선수의 인덱스로 변경
        sequence[predecessor] = theIdx; //  이전 선수의 인덱스를 현재 선수의 인덱스로 변경
    }
    
    return players;
}