const { exportAllDeclaration } = require("@babel/types")

const aritmatika = require('./aritmatika');

test('hasil 1 + 2 adalah 3',() => {
    expect(aritmatika(1,2)).toBe(3);
});

// test('ingin nya 4 -3 hasilnya 1', () => {
//     expect(kurang(4,3)).toBe
// })