function solution(park, routes) {
    var answer = [];
    var x, y;
    var width = park[0].length, height = park.length;;
    
    for(let i = 0; i < park.length; i++) {
        if(park[i].includes("S")) {
            x = i;
            y = park[i].indexOf("S");
            break;
        }
    }
    
    for(let i = 0; i < routes.length; i++) {
        let tx = x;
        let ty = y;
        let arr = routes[i].split(" ");
        if(arr[0] === "E") {
            for(let i = 0; i < Number(arr[1]); i++) {
                if(y + 1 === width || park[x][y + 1] === "X") {
                    x = tx;
                    y = ty;
                    break;
                }
                else {
                    y++;
                }
            }
        }
        else if(arr[0] === "W") {
            for(let i = 0; i < Number(arr[1]); i++) {
                if(y - 1 === -1 || park[x][y - 1] === "X") {
                    x = tx;
                    y = ty;
                    break;
                }
                else {
                    y--;
                }
            }
        }
        else if(arr[0] === "S") {
            for(let i = 0; i < Number(arr[1]); i++) {
                if(x + 1 === height || park[x + 1][y] === "X") {
                    x = tx;
                    y = ty;
                    break;
                }
                else {
                    x++;
                }
            }
        }
        else {
            for(let i = 0; i < Number(arr[1]); i++) {
                if(x - 1 === -1 || park[x - 1][y] === "X") {
                    x = tx;
                    y = ty;
                    break;
                }
                else {
                    x--;
                }
            }
        }
    }
    answer.push(x);
    answer.push(y);
    return answer;
}