// 15. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ delete​ ​ particular​ ​object​ ​ from​ ​ array​ ​ and​ ​ add​ ​ new​ ​ object​ ​ at particular​ ​ position. Also if the position does not exist then error message should be shown to the user.

// static_array = [  {name:  "Jack" , age : 23}, {name:  "Sam" , age : 12},  {name:  "Max" , age : 20} ]
// Input : ask user to delete or insert
// delete_element_position = 2  OR insert_element_position = 3
// insert_name = "Daniel"
// insert_age = "56"
// Output : if deleted
// [  {name:  "Jack" , age : 23}, {name:  "Sam" , age : 12}]
// if inserted
// [  {name:  "Jack" , age : 23} , {name:  "Sam" , age : 12} ,  {name:  "Max" , age : 20} , {name:  "Daniel" , age : 56} ]



function modifyObject() {
    let arr = [  {name:  "Jack" , age : 23}, {name:  "Sam" , age : 12},  {name:  "Max" , age : 20} ];

    let action = 'insert'
    let position = 0;

    // insert
    if (action == 'insert') {
        let insert_name = 'Mihir';
        let insert_age = 21;
        let newElement = {};
        newElement.name = insert_name;
        newElement.age = insert_age;
        arr.splice(position, 0, newElement);
    }

    // delete
    if (action == 'delete') {
        arr.splice(position, 1);
    }

    console.log(arr);
}

modifyObject();