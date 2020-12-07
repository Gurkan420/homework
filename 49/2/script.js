
// let str = ''
// for (let i = 0; i < 8; i++) {
//     for (let j = 0; j < 10; j++) {
//         str = str + ' *'
//     }
//     str = str + '\n' // Lägg till en radbrytning
// }

// console.log(str)

/////////// O-förenklad kod

let str = ""
for (let i = 0; i < 5; i++) {
    str = str + "* ".repeat(5);
    str = str + "\n"
}
console.log(str)

