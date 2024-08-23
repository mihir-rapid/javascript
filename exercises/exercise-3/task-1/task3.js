// 3. Write​ ​ a ​​ JavaScript​ ​ function​ ​ to​ ​ remove​ ​ HTML/XML​ ​ tags​ ​ from​ ​ string.

// Input : '<p><strong><em>Javascript​ ​Exercises</em></strong></p>'
// Output : Javascript​ Exercises


function removeElements() {
    let string = '<p><strong><em>Javascript​ ​Exercises</em></strong></p>'
    let newString = string.replace(/<\/?[^>]+(>|$)/g, '');

    console.log(newString);
}
removeElements();

// /<\/?[^>]+(>|$)/g