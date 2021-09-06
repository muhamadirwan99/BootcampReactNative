function arrayToObject(arr) {
    var now = new Date();
    var thisYear = now.getFullYear();
    var obj = "{}";
    for(let i = 0; i<arr.length; i++){
        let tahunLahir = arr[i][3];
        if(tahunLahir > thisYear || tahunLahir == null){
            tahunLahir = "Invalid birth year";
        }else{
            tahunLahir = thisYear - tahunLahir;
        }
        
        obj = {
            firstName : arr[i][0],
            lastName : arr[i][1],
            gender : arr[i][2],
            age : tahunLahir
        }
        var fullName = arr[i][0] + arr[i][1];
        process.stdout.write(`${i+1}. ${fullName} : `);
        console.log(obj)
    }
}

// Driver Code
var people = [ ["Bruce ", "Banner", "male", 1975], ["Natasha ", "Romanoff", "female"] ]
arrayToObject(people) 
/*
{
  '1. Bruce Banner': { 
    firstName: 'Bruce', 
    lastName: 'Banner', 
    gender: 'male', 
    age: 45 
  },
  '2. Natasha Romanoff': {
    firstName: 'Natasha',
    lastName: 'Romanoff',
    gender: 'female',
    age: 'Invalid Birth Year'
  }
} 
*/
 
var people2 = [ ["Tony ", "Stark", "male", 1980], ["Pepper ", "Pots", "female", 2023] ]
arrayToObject(people2) 
/* 
{
  '1. Tony Stark': {
    firstName: 'Tony', 
    lastName: 'Stark', 
    gender: 'male', 
    age: 40 
  },
  '2. Pepper Pots': {
    firstName: 'Pepper',
    lastName: 'Pots',
    gender: 'female',
    age: 'Invalid Birth Year'
  }
} 
*/
 
// Error case 
arrayToObject([]) // "{}"

console.log("=======================================")

function obj (memberId, money) {
  this.memberID = memberId;
  this.money = money;
  this.daftarBelanjaan = [];
  this.kembalian = 0;
}

function shoppingTime(memberId, money) {
    if(memberId == '' || memberId == undefined && money == undefined){
      return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }else if(money < 50000){
      return "Mohon maaf, uang tidak cukup";
    }else{
      shopObj = new obj(memberId, money);
      shopObj.memberID = memberId;
      shopObj.money = money;
      var dapatMembeli = true;

      while (money > 0 && dapatMembeli){
        if (money >= 1500000) {
          shopObj.daftarBelanjaan.push("Sepatu Stacattu");
          money -= 1500000;
          dapatMembeli = true;
        }
        if (money >= 500000){
          shopObj.daftarBelanjaan.push("Baju Zoro");
          money -= 500000;
          dapatMembeli = true;
        }
        if (money >= 250000){
          shopObj.daftarBelanjaan.push("Baju H&N");
          money -= 250000;
          dapatMembeli = true;
        }
        if (money >= 175000){
          shopObj.daftarBelanjaan.push("Sweater Uniklooh");
          money -= 175000;
          dapatMembeli = true;
        }
        if (money >= 50000){
          shopObj.  daftarBelanjaan.push("Casing Handphone");
          money -= 50000;
          dapatMembeli = true;
        }
        dapatMembeli = false;
      }
      shopObj.kembalian = money;
      return shopObj;
    }
}
   
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

console.log("===========================================================");
function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  var penumpang = [];
 
  for(let i = 0 ; i<arrPenumpang.length; i++){

    var dari = rute.indexOf(arrPenumpang[i][1]);
    var ke = rute.indexOf(arrPenumpang[i][2]);
    var bayar = 0;

    if(dari<ke){
      for(let j = dari; j<ke; j++){
        bayar = bayar+2000;
      }
    }else {
      for(let j = dari; j > ke; j--){
        bayar = bayar+2000;
      }
    }   

    var obj = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: bayar
    }
    penumpang.push(obj);
  }
  return penumpang;
}
 
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
 
console.log(naikAngkot([])); //[]

