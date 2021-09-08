const readBooksPromise = require('./promise.js')
 
const books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

let waktu = 10000;
let i = 0;

function baca(waktu,books){
    if(waktu>0 && i<books.length) {
        readBooksPromise(waktu,books[i])
            .then(function(sisaWaktu){
                waktu=sisaWaktu;
                i++;
                baca(waktu,books);
            }) 
            .catch(function (sisaWaktu){
                return;
            });  
    }
}

baca(waktu,books);
