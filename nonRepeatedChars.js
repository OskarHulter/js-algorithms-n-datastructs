export default function noRepeat(str) {
    let arr = str.split('');
    let obj = {};
    let answer = false;
    let minIndex = arr.length;

    arr.forEach((letter, index) => {
        if (!obj[letter]) {
            obj[letter] = [index, true];
        } else if (obj[letter]) {
            obj[letter] = false;
        }
    });
    for (let key in obj) {
        if (obj[key]) {
            if (obj[key][0] < minIndex) {
                answer = key;
                minIndex = obj[key][0];
            }
        }
    }
    return answer;
}
console.log(noRepeat('OOOOsskar a'));
