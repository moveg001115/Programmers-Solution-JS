function solution(arr, k) {
    return k % 2 ? arr.map((el) => el * k) : arr.map((el) => el + k);
}