// check is string is palindrome

function isPalindrome(string) {
    string = string.trim();
    const reverseString = string.split('').reverse().join('');
    if (string == reverseString) return true;
    return false;
}

console.log(isPalindrome('  iti'));
