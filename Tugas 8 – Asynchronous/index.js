const readBooks = require('./callback.js')
 
const books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Tulis code untuk memanggil function readBooks di sini

let waktu = 10000;
let i = 0;

function baca(time,books){
    if(time>0 && i<books.length) {
        readBooks(waktu,books[i],function(sisaWaktu){
            waktu=sisaWaktu;
            i++;
            baca(waktu,books);
        })
    }
}

baca(waktu,books);
