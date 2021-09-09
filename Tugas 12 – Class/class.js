class Animal {
    constructor(name){
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}
 
const sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

console.log("==============================");

class Ape extends Animal{
    constructor(name){
        super(name);
        this.legs = 2;
        this.cold_blooded = false;
    }
    yell(){
        return console.log("Auooo");
    }
}

const sungokong = new Ape("kera sakti");
console.log(sungokong.name); // "kera sakti"
console.log(sungokong.legs); // 2
console.log(sungokong.cold_blooded); // false
sungokong.yell(); // "Auooo"

console.log("==============================");

class Frog extends Animal{
    constructor(name){
        super(name);
        this.cold_blooded = true;
    }
    jump(){
        return console.log("hop hop");
    }

}
const kodok = new Frog("buduk");
console.log(kodok.name); // "buduk"
console.log(kodok.legs); // 4
console.log(kodok.cold_blooded); // true
kodok.jump(); // "hop hop"

console.log("==============================");

class Clock{
  
    constructor({template}){
        this.template = template;
        var timer;
    }
  
    render = () => {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop = () => {
      clearInterval(timer);
    };
  
    start = () => {
      this.render();
      this.timer = setInterval(this.render, 1000);
    };
  
  }
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start(); 
