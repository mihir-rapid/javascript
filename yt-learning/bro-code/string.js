// string methods = allows you to manipulate & work with string
let username = "mihirxtc    "

// charAt()
console.log(username.charAt(0))
// indexOf()
console.log(username.indexOf("i"));
// lastIndexOf()
console.log(username.lastIndexOf("i"));
// length()
console.log(username.length);

// trim()
username = username.trim()
console.log(username);

console.log(username.toUpperCase());    // m => M
console.log(username.toLowerCase());    // M => m

// repeat()
username = username.repeat(3)
console.log(username);

// startsWith()
let res = username.startsWith("M".toLowerCase())
console.log(res);

// endsWith()
let res1 = username.endsWith("C".toLowerCase())
console.log(res1);

// includes()
username = "mihir xtc"
let isIncludeSpace = username.includes(" ")
let output = isIncludeSpace ? "username should not include spaces!" : username
console.log(output);

// replaceAll()
let phone = "812-842-9890"
phone = phone.replace('-', '')
console.log(phone);

// url example
let url = "https://mihir menon.co"
url = url.replace(' ', '%')
console.log(url);
