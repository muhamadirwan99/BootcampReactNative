const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input nama = ", function(nama) {
    if(nama === ""){
        console.log("Nama harus diisi!");
        rl.close();
    }else{
        rl.question("Peran = ", function(peran) {
            if(nama != null && peran == "Penyihir" || peran == "penyihir"){
                console.log(`\nHalo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`);
            }else if(nama != null && peran === "Guard" || peran == "guard"){
                console.log(`\nHalo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`);
            }else if(nama != null && peran === "Werewolf" || peran == "werewolf"){
                console.log(`\nHalo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`);
            }else{
                console.log(`\nHalo ${nama}, Pilih peranmu untuk memulai game!`);
            }
            
            let namaBulan = null;
            console.log("\n");

            rl.question("Hari = ", function(hari) {
                rl.question("Bulan = ", function(bulan) {
                    rl.question("Tahun = ", function(tahun) {
                        switch(bulan){
                            case "1":
                                namaBulan = "Januari";
                            break;
                            case "2":
                                namaBulan = "Februari";
                            break;
                            case "3":
                                namaBulan = "Maret";
                            break;
                            case "4":
                                namaBulan = "April";
                            break;
                            case "5":
                                namaBulan = "Mei";
                            break;
                            case "6":
                                namaBulan = "Juni";
                            break;
                            case "7":
                                namaBulan = "Juli";
                            break;
                            case "8":
                                namaBulan = "Agustus";
                            break;
                            case "9":
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
                        console.log(`\n${hari} ${namaBulan} ${tahun}`);
                        rl.close();
                    })
                });
            });
        });
    }
});




rl.on("close", function() {
    console.log("\nAnda telah keluar.");
    process.exit(0);
});
