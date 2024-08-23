// 2. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ which​ ​ accepts​ ​ a ​ ​ number​​ as​ ​ input​ ​ and​ ​ insert​ ​ dashes​ ​ (-) between​ ​ each​ ​ two​ ​ even​ ​ numbers.

// Input = 02544168
// Output = 0-254-416-8



function insertDash() {
    let str = '214678652673';
    let arr = [];
    
    for (let i=0; i<str.length; i++) {
        if (str.charAt(i) % 2 == 0 && str.charAt(i+1) % 2 == 0) {
            arr.push(str.charAt(i), '-');
        } else {
            arr.push(str.charAt(i));
        }
    }

    console.log(arr.join(''));
}

insertDash();
