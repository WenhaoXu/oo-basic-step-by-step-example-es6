
const{Person}= require("./person")
class Teacher  extends Person{
    constructor(name ,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        if((this.klass==null))
            return super.introduce()+" I am a Teacher. I teach No Class.";
        else{

            return super.introduce()+" I am a Teacher. I teach Class "+this.klass+".";
        }
    }
}


module.exports={Teacher}