
function addProps(string) {
    const charCount = {}
    for (let char of string) {
        if (charCount[char]) {
            charCount[char]++
        } else {
            charCount[char] = 1
        }
    }
    return charCount
}       

console.log(addProps('mihir'));
