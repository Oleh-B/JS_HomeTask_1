let amount = 100;

function switchTimeCheck(value) {
    let switchString = 'switch(' + value + ')' + '{\n';
    for (let i = 0; i < amount; i++) {
        let caseString = 'case ' + i + ': return ' + value + '\n break;\n';
        switchString = switchString + caseString;
    }
    switchString = switchString + '}';
    let result = new Function('',switchString);
    return result()
}

console.time('switch execution time');
for(let i = 1; i < amount; i++) {
    switchTimeCheck(i)
}
console.timeEnd('switch execution time');

function ifTimeCheck(value) {
    let i = 0;
    let ifString = 'if (' + i + ' === ' + value + ') ' + '{ return ' + value + ' }\n';
    for (i += 1; i < amount; i++) {
        ifString = ifString + ' else if(' + i + ' === ' + value + ') ' + '{ return ' + value + ' } \n';
    }
    ifString = ifString + 'else { }';
    let result = new Function('',ifString);
    return result()
}

console.time('if execution time');
for(let i = 1; i < amount; i++) {
    ifTimeCheck(i)
}
console.timeEnd('if execution time');


