function solution(num_list) {
    var answer = 0;
    let oddN = "", evenN = "";
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2) oddN += num_list[i];
        else evenN += num_list[i];
    }
    return Number(oddN) + Number(evenN);
}