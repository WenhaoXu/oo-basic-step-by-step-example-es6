const{Person}= require("./person");
const {Class} =require("./class");
const {Student} =require("./student");
class Teacher  extends Person{
    constructor(name ,age,Class){
        super(name,age);
        this.klass=Class;
    }
    introduce(){
        if((this.klass==null))
            return super.introduce()+" I am a Teacher. I teach No Class.";
        else {

            return super.introduce() + " I am a Teacher. I teach Class " + this.klass.getDisplayName() + ".";
        }
    }
    introduceWith(student){
        if(this.klass)
        return ;
    }
}


module.exports={Teacher}
