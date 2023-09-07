function solution(wallpaper) {
    var answer = [];
    for(let i = 0; i < wallpaper.length; i++) {
        if(wallpaper[i].includes("#")) {
            answer.push(wallpaper.indexOf(wallpaper[i]));
            break;
        }
    }
    let tmp = null;
    for(let i = 0; i < wallpaper.length; i++) {
        if(wallpaper[i].includes("#")) {
            if(tmp === null) tmp = wallpaper[i].indexOf("#");
            else {
                if(wallpaper[i].indexOf("#") < tmp) {
                    tmp = wallpaper[i].indexOf("#")
                }
            }
        }
    }
    answer.push(tmp);
    
    for(let i = wallpaper.length - 1; i >= 0; i--) {
        if(wallpaper[i].includes("#")) {
            answer.push(i + 1);
            break;
        }
    }
    
    let arr = [];
    for(let i = 0; i < wallpaper.length; i++) {
        for(let j = wallpaper[i].length - 1; j >= 0; j--) {
            if(wallpaper[i][j] === "#") {
                arr.push(j);
                break;
            }
        }
    }
    arr.sort((a, b) => b - a);
    answer.push(arr[0] + 1);
    return answer;
}