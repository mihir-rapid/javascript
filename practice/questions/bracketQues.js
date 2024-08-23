// take a string and pass in brackets <ie. '()'>, check if string has both opening & closing brackets, it it has both return true & if not then return false

const checkBracket = (str) => {
    const arr = [];
    for (let i=0; i<str.length; i++) {
        if (str[i] == ')') {
            if (arr[arr.length - 1] == '(') {
                arr.pop();
            } else {
                arr.push(str[i]);
            }
        } else {
            arr.push(str[i]);
        }
    }
    if (arr.length == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkBracket('()'));