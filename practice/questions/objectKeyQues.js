// take a object and return the key of it's inner object

const department = {
    'hr': {
        name: 'Human Resources',
        employees: {
            '1': 'Kuldeep',
            '2': 'Maulik'
        }
    },
    'it': {
        name: 'Information Technology',
        employees: {
            '3': 'Mihir',
            '4': 'krish'
        }
    }
}

for (let key in department) {
    const res = department[key].employees;
    console.log(Object.values(res));
}
