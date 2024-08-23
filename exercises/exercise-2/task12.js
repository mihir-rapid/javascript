// 12. Write​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ chop​ ​ a ​ ​ string​ ​into​ ​ chunks​ ​ of​ ​ a ​ ​ given​ ​ length.

// input_length = 2
// input_string = "RapidOpsSolution"
// console.log(string_chop('RapidOpsSolution’',2));



function chopString(string, length) {
    let arr = [];
    for (let i=0; i<string.length; i+=length) {
        arr.push(string.slice(i, i+length));
    }
    console.log(arr);
}
chopString('rapidops', 2);