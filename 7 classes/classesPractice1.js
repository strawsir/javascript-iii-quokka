// Build a class for an american ninja warrior
// Properties to track : Name, best time, farthest difficulty
// Add a method to update the best time
// Add a method to update the farthest difficulty
// Add a method to return the best time and farthest difficulty on an object

class Ninja{
    constructor(name, bestTime, farthest){
        this.name=name;
        this.bestTime=bestTime;
        this.farthest=farthest;
    }
updateTime(newTime){
    if(this.bestTime>newTime){
        this.bestTime=newTime
    }
}
updateDif(newDif){
    if(this.farthest<newDif){
        this.farthest++
    }
}
display(){
    return `The amazing ninja ${this.name} completed the course in ${this.bestTime} seconds. With a difficulty of ${this.farthest}`
}

}

let tarin = new Ninja('Tarin',45,3)

tarin.updateTime(4);

tarin