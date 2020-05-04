let count = 21;
for (let i = 1; i < count; i++) {
    i = i + 1;
    console.log(i);

}

let printNumberStill = (icount)  => {
    for (let n = 1; n <= icount; n++) {
        console.log(n);
    }
}

printNumberStill (15);
printNumberStill (20);

let getGreatingName = (name) => {
    console.log('Üdvözöllek', name);
}

getGreatingName ('Jani');

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
};

printValues ([1,2,4,6,7,4,7,]);

let printValue2 = (array) => {
    array.forEach(value => {
        console.log(value);
    });
}

printValue2 ([2,6,7,5,8,9,]);