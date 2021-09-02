function teriak(){
    return "Halo Sanbers!"
}
 
console.log(teriak());

console.log("==================================");

function kalikan(angka1, angka2){
    return angka1 * angka2
}

var num1 = 12;
var num2 = 4;
 
var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

console.log("==================================");

function introduce(nama, umur, alamat, hobi){
    return `Nama saya ${nama}, umur saya ${umur} tahun, alamat saya di ${alamat}, dan saya punya hobby yaitu ${hobi}!`
}
 
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "Gaming";
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);