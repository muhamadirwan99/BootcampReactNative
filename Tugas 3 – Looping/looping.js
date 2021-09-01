let i = 1;

while(i <= 20) { 
    if(i %2 == 0){
        console.log(`${i} - I love coding`); 
    }
  i++;
}

let j = 20;
while(j >= 1) { 
    if(j %2 == 0){
        console.log(`${j} - I love coding`); 
    }
  j--;
}

console.log("----------------------------");

for(let k= 1; k <= 20; k++){
    if(k%2 != 0 && k%3 == 0){    
        console.log(`${k} - I Love Coding`);
    }else if(k%2 == 0){
        console.log(`${k} - Berkualitas`);
    }else{
        console.log(`${k} - Santai`);
    }
}

console.log("----------------------------");

let no3 = '';

for (let l = 0; l < 4; l++) {
    for (let m = 0; m < 8; m++) {
        no3 += '#';
    }
    no3 += '\n';
}

console.log(no3)

console.log("----------------------------");

let no4 = '';

for (let n = 0; n < 7; n++) {
    for (let o = 0; o < n; o++) {
        no4 += '#';
    }
    no4 += '\n';
}

console.log(no4)

console.log("----------------------------");

var no5 = "";

for (var p = 0; p < 8; p++) { 
  for (var q = 0; q < 8; q++) {
    if ((p + q) % 2 == 0)
        no5 += " ";
    else
        no5 += "#";
  }
  no5 += "\n";
}

console.log(no5);