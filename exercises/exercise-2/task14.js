// 14. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​​ array​ ​ of​ ​ object​ ​ in​ ​ ascending​ ​ order​ ​ of​ ​ age, & descending​ ​ order​ ​ of​ ​ name.​ ​ Make​ ​ array​ ​ of​ ​ object​ ​ with​ ​ three​ ​ fields​ ​which are​​:

// 1.​ ​ Id,​ ​
// 2.​ ​ Name,​ ​
// 3.  Age

// NOTE:​ ​ Array​ ​ have​ ​ minimum​ ​ 10​ ​ objects.



function sortArrObj() {
    let arr = [
        { "id": 1, "name": "Alice", "age": 29 },
        { "id": 2, "name": "Bob", "age": 34 },
        { "id": 3, "name": "Charlie", "age": 22 },
        { "id": 4, "name": "Diana", "age": 27 },
        { "id": 5, "name": "Eve", "age": 31 },
        { "id": 6, "name": "Frank", "age": 45 },
        { "id": 7, "name": "Grace", "age": 26 },
        { "id": 8, "name": "Hank", "age": 38 },
        { "id": 9, "name": "Ivy", "age": 30 },
        { "id": 10, "name": "Jack", "age": 41 }
    ];
    
    let ages = arr.sort((a, b) => a.age - b.age);
    console.log(ages);
}

sortArrObj();