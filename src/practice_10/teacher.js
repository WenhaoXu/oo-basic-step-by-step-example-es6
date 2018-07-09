
const {Person}= require("./person");
class Teacher  extends Person{
    constructor(id,name ,age,klasses){
        super(id,name,age);
        this.klasses=klasses ||[];
    }
    introduce(){
        if((this.klasses.length === 0))
            return super.introduce()+" I am a Teacher. I teach No Class.";
        else {
            return super.introduce() + " I am a Teacher. I teach Class " + this.klasses.map(klass=>{return klass.number;}).join(", ") + ".";
        }
    }
    introduceWith(student){
        if(this.klasses.includes(student.klass)){
            return super.introduce() + " I am a Teacher. I teach "+student.name+".";
        }
        else{
            return super.introduce() + " I am a Teacher. I don't teach "+student.name+".";
        }
    }
    isTeaching(student){
        return   student.isInClass(teacher)
    }
}


module.exports={Teacher}