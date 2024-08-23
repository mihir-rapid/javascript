// 11. Write​ ​ a ​ ​ JavaScript​ ​function​ ​ to​ ​ insert​ ​ a ​ ​ string​ ​ within​ ​ a ​ ​ string​ ​ at​ ​ a ​ ​ particular​ ​ position (default​ ​ is​ ​ 1).

// static_string = "This is a sample string"
// input_string = "Insert me"
// input_position = 3
// Output : "ThInsert meis is a sample string"



function insertString(insertString, position = 1) {
    let string = 'mouse nice';

    let startingString = string.slice(0, position - 1);
    let endingString = string.slice(position - 1);

    string = startingString + insertString + endingString;

    console.log(string);
}

insertString('is ', 7);