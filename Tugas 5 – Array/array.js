function range(startNum, finishNum) {
    let num = [];
    if(startNum <= finishNum){
        for(let i = startNum; i<=finishNum; i++){
            num.push(i);
        }
        return num;
    }else if(startNum >= finishNum){
        for(let i = startNum; i>=finishNum; i--){
            num.push(i);
        }
        return num;
    }else{
        return -1;
    }
   
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

console.log("=========================================")

function rangeWithStep(startNum, finishNum, step) {
    let num = [];
    if(startNum <= finishNum){
        for(let i = startNum; i<=finishNum; i+=step){
            num.push(i);
        }
        return num;
    }else if(startNum >= finishNum){
        for(let i = startNum; i>=finishNum; i-=step){
            num.push(i);
        }
        return num;
    }else{
        return -1;
    }

}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

console.log("=========================================")

function sum(startNum, finishNum, step) {
    let num = [];
    let jumlah = 0;
    if(step == null){
        step = 1;
    }
    if(startNum <= finishNum){
        for(let i = startNum; i<=finishNum; i+=step){
            num.push(i);
        }
    }else if(startNum >= finishNum){
        for(let i = startNum; i>=finishNum; i-=step){
            num.push(i);
        }
    }else if(startNum != null){
        return 1;
    }else{
        return 0;
    }

    for(let i = 0; i < num.length; i++) {
        jumlah += num[i];
    }

    return jumlah;
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

console.log("=========================================")

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

function dataHandling(){
    for(let i = 0; i < input.length; i++){
        console.log(`Nomor ID: ${input[i][0]}`);
        console.log(`Nama Lengkap: ${input[i][1]}`);
        console.log(`TTL: ${input[i][2]}`);
        console.log(`Hobi: ${input[i][3]}`);
        console.log("")
    }
}

dataHandling();

console.log("=========================================")

function balikKata(kalimat){
    var kata = "";

    for(let i=kalimat.length - 1; i>= 0; i--){
        kata += kalimat[i];
    }

    return kata;
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 

console.log("=========================================")

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(textArray){
    textArray.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    textArray.splice(4,1, "Pria", "SMA Internasional Metro");
    console.log(textArray);

    let tanggal = textArray[3].split("/");
    let namaBulan = "";

    switch(tanggal[1]){
        case "01":
            namaBulan = "Januari";
        break;
        case "02":
            namaBulan = "Februari";
        break;
        case "03":
            namaBulan = "Maret";
        break;
        case "04":
            namaBulan = "April";
        break;
        case "05":
            namaBulan = "Mei";
        break;
        case "06":
            namaBulan = "Juni";
        break;
        case "07":
            namaBulan = "Juli";
        break;
        case "08":
            namaBulan = "Agustus";
        break;
        case "09":
            namaBulan = "September";
        break;
        case "10":
            namaBulan = "Oktober";
        break;
        case "11":
            namaBulan = "November";
        break;
        case "12":
            namaBulan = "Desember";
        break;
        default:
            namaBulan = "error";
    }

    console.log(namaBulan);
    let joinTanggal = tanggal.join("-");

    let descendingTanggal = tanggal.sort(function (value1, value2) { return value2 - value1 } );
    console.log(descendingTanggal);

    console.log(joinTanggal);
    
    let txtSlice = textArray[1].slice(0,14);
    console.log(txtSlice);
}

dataHandling2(input);