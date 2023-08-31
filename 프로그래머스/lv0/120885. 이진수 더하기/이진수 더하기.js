function solution(_bin1, _bin2) {
    const bin1 = _bin1.split("").reverse();
    const bin2 = _bin2.split("").reverse();

    const N1 = bin1.length;
    const N2 = bin2.length;

    let i = 0;
    let j = 0;

    let sum = 0;
    let carry = 0;
    let result = [];

    while (i < N1 || j < N2 || carry > 0) {
        const n1 = Number(bin1[i]) || 0;
        const n2 = Number(bin2[j]) || 0;

        let localSum = carry + n1 + n2;

        result.push(localSum % 2);
        carry = Math.floor(localSum / 2);

        i += 1;
        j += 1;
    }

    return result.reverse().join("");
}