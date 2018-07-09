
const {Person}= require("./person");
// const {Class} =require("./class")
class Student  extends Person{
    constructor(name ,age,Class){
        super(name,age);
        this.klass=Class;
    }
    introduce(){
        return super.introduce()+" I am a Student. I am at "+this.klass.getDisplayName()+".";
    }
}





module.exports={Student}