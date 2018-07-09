
const{Person}= require("./person");
const {Class} =require("./class");
const {Student} =require("./student");
class Teacher  extends Person{
    constructor(id,name ,age,Class){
        super(id,name,age);
        this.klass=Class;
    }
    introduce(){
        if((this.klass==null))
            return super.introduce()+" I am a Teacher. I teach No Class.";
        else {

            return super.introduce() + " I am a Teacher. I teach " + this.klass.getDisplayName() + ".";
        }
    }
    introduceWith(student){
        if(this.klass.equal(student.klass)){
            return super.introduce() + " I am a Teacher. I teach "+student.name+".";
        }
        else{
            return super.introduce() + " I am a Teacher. I don't teach "+student.name+".";
        }
    }
}


module.exports={Teacher}
