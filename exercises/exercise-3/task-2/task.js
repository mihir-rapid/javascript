// Write​ ​ a ​ ​ JavaScript​ ​ program ​ that​ ​ displays​ ​ a list​ ​ of​ ​ names​ ​ according​ ​ to​ ​ the sports​ group.




// [{

//   Name:​ ​ 'Ravindra',

//   Sports: ['Chess', 'Cricket'],

//   },

// {

//   Name:​ ​ 'Ravi',

//   Sports: ['Cricket', 'Football'],

// },

// {

//   Name:​ ​ 'Rishabh',

//   Sports: ['Table-Tennis', 'Football'],

// },]

// NOTE: ​ ​ array​ ​ has​ ​ ​ 2 ​ ​ objects,​ ​ and​ ​ all​ ​ objects​ ​have​ ​ a minimum​ ​ of 1 ​ ​ sport.
// Expected​ ​ output​ :
// [{ Chess:​ ​ [‘Ravindra’] }, { Cricket:​ [‘Ravindra’,'Ravi'] }, { Football:​ ​ [‘Ravi’,​ ​ ‘Rishabh’] }, { Table-Tennis:​ ​ [‘Rishabh']}]




let players = [
    { name: 'Mihir', sports: ['cricket', 'chess']},
    { name: 'Aryan', sports: ['cricket', 'football']},
    { name: 'Karan', sports: ['table-tennis', 'football']},
];

let sportsObj = {};

players.forEach((player) => {
    let {name, sports} = player;

    sports.forEach((sport) => {
        if (!sportsObj[sport]) sportsObj[sport] = [];
        sportsObj[sport].push(name);
    });
});

let res = Object.keys(sportsObj).map((sport) => ({
    [sport]: sportsObj[sport]
}));

console.log(res);
