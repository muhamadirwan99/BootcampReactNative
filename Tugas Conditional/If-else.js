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
            rl.close();
        });
    }
});

rl.on("close", function() {
    console.log("\nAnda telah keluar.");
    process.exit(0);
});