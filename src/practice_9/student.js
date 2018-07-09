
const {Person}= require("./person");
class Student  extends Person{
    constructor(id,name ,age,Class){
        super(id,name,age);
        this.klass=Class;
    }
    introduce(){
        if(this.klass.leader===this){
            return  super.introduce()+" I am a Student. I am Leader of "+this.klass.getDisplayName()+".";
        }
        return super.introduce()+" I am a Student. I am at "+this.klass.getDisplayName()+".";
    }
}





module.exports={Student}