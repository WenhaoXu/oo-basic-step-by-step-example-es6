
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

        if(this.klasses.map(klass=> {return klass.number}).includes(student.getNumber())){
            return super.introduce() + " I am a Teacher. I teach "+student.name+".";
        }
        else{
            return super.introduce() + " I am a Teacher. I don't teach "+student.name+".";
        }
    }
    isTeaching(student){
        return   student.isInClass(teacher)
    }
    notiflyMe(mes, student){
    if(mes==="join"){
        console.log("I am "+this.name+". I know "+student.name+" has joined Class "+student.getNumber()+".")
    };
    if(mes === "leader"){
        console.log("I am "+this.name+". I know "+student.name+" become Leader of Class "+student.getNumber()+".")
    }
    }
}


module.exports={Teacher}