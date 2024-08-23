// 5. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ compute​ ​ the​ ​ union​ ​of​ ​ two​ ​ arrays,​ ​ and​ ​ Write​ ​ a ​ ​ JavaScript function​ ​ to​ ​ find​ ​ the​ ​ difference​ ​ of​ ​ two​ ​ arrays, and intersection of two arrays.

// array_a = [0,1,2,3] , array_b = [3,4,5]
// Output = union_array : [0,1,2,3,4,5] , a-b_array = [0,1,2], b-a_array = [4,5], intersection_array = [3]



let array_a = [0,1,2,3];
let array_b = [3,4,5];

// union
function union_array(array_a, array_b) {
    let union = [...new Set(array_a.concat(array_b))];
    console.log('union', union);
}
union_array(array_a, array_b);


// intersection
function intersection_array(array_a, array_b) {  
    let intersection = array_a.filter((element) => array_b.includes(element));
    console.log('intersection', intersection);
}
intersection_array(array_a, array_b);


// difference
function difference_array(array_a, array_b) {
    let difference = array_a.filter((element) => !array_b.includes(element));
    console.log('difference', difference);
}
difference_array(array_a, array_b);
difference_array(array_b, array_a);