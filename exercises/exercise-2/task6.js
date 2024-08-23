// 6. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ fill​ ​ an​ ​ array​ ​with​ ​ values​ ​ (either numeric or​ string​ ​ with​ ​ one character)​ ​ on​ ​ supplied​ ​ bounds.

// static_array = [ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ]
// Input = 2
// console.log(num_string_range('a',​ ​ "z",​ ​ 2));
// Output = ["a",​ ​ "c",​ ​ "e",​ ​ "g",​ ​ "i",​ ​ "k",​ ​ "m",​ ​ "o",​ ​ "q",​ ​ "s",​ ​ "u",​ ​ "w",​ ​ "y"]



function fillArray(arr, bound) {

    let length = arr.length;
    let index = 0;
    let string = ''

    while (index < length) {
        string += arr[index];
        index += bound;
    }

    console.log(string.split(''));
}


let arr = [ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ];
fillArray(arr, 5)