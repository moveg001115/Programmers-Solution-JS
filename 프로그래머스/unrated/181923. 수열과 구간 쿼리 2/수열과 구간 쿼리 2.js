function solution(arr, queries) {
    var answer = [];
    for(let i = 0; i < queries.length; i++) {
        let tmp;
        for(let j = queries[i][0]; j <= queries[i][1]; j++) {
            if(arr[j] > queries[i][2]) {
                if(tmp === undefined) tmp = arr[j];
                else {
                    if(tmp > arr[j]) tmp = arr[j];
                }
            }
        }
        if(tmp === undefined) answer.push(-1);
        else answer.push(tmp);
    }
    return answer;
}