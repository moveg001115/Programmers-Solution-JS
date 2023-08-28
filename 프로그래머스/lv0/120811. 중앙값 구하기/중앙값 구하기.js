function solution(array) {
    let i, j, min, temp, answer;
    for(i = 0; i < array.length-1; i++) {
        min = i;
        for(j = i + 1; j < array.length; j++) {
            if(array[j] < array[min]) min = j;
        }
        temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    answer = array[Math.floor(array.length / 2)]
    return answer;
}